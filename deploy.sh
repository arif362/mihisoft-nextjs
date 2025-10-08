#!/bin/bash

# 🚀 Mihisoft Website Deployment Script
# This script builds and deploys the Next.js website to AWS S3

set -e  # Exit on any error

# Load environment variables from .env file
if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
fi

# Configuration from environment variables
BUCKET_NAME="${AWS_BUCKET_NAME}"
REGION="${AWS_REGION}"
PROFILE="${AWS_PROFILE:-default}"

# Check required environment variables
if [ -z "$BUCKET_NAME" ] || [ -z "$REGION" ]; then
    echo "❌ AWS_BUCKET_NAME and AWS_REGION must be set in your .env file."
    exit 1
fi

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Functions
log_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

log_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

log_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

log_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Start deployment
echo -e "${BLUE}"
echo "🚀 Mihisoft Website Deployment"
echo "==============================="
echo -e "${NC}"

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    log_error "AWS CLI is not installed. Please install it first."
    exit 1
fi

# Check if AWS is configured
if ! aws sts get-caller-identity --profile $PROFILE &> /dev/null; then
    log_error "AWS CLI is not configured. Please run 'aws configure' first."
    exit 1
fi

log_info "AWS CLI configured successfully"

# Clean previous build
log_info "Cleaning previous build..."
rm -rf out/
rm -rf .next/

# Install dependencies
log_info "Installing dependencies..."
npm ci

# Run security audit
log_info "Running security audit..."
npm run audit

# Run linting (optional, comment out if not needed)
log_info "Running linter..."
npm run lint || log_warning "Linting completed with warnings"

# Build the project
log_info "Building Next.js project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    log_success "Build completed successfully!"
else
    log_error "Build failed! Please fix errors and try again."
    exit 1
fi

# Check if out directory exists
if [ ! -d "out" ]; then
    log_error "Build output directory 'out' not found!"
    exit 1
fi

# Verify bucket exists
log_info "Verifying S3 bucket exists..."
if ! aws s3 ls "s3://$BUCKET_NAME" --profile $PROFILE &> /dev/null; then
    log_warning "Bucket $BUCKET_NAME does not exist. Creating it..."
    aws s3 mb "s3://$BUCKET_NAME" --region $REGION --profile $PROFILE
    
    # Configure bucket for static website hosting
    log_info "Configuring bucket for static website hosting..."
    aws s3 website "s3://$BUCKET_NAME" \
        --index-document index.html \
        --error-document 404.html \
        --profile $PROFILE
        
    log_success "Bucket created and configured!"
fi

# Deploy to S3
log_info "Deploying to S3 bucket: $BUCKET_NAME"

# Upload static assets (CSS, JS, images) with long cache
log_info "Uploading static assets..."
aws s3 sync out/ "s3://$BUCKET_NAME" \
    --profile $PROFILE \
    --delete \
    --cache-control "public, max-age=31536000" \
    --exclude "*.html" \
    --exclude "*.xml" \
    --exclude "*.txt"

# Upload HTML and XML files with short cache
log_info "Uploading HTML files..."
aws s3 sync out/ "s3://$BUCKET_NAME" \
    --profile $PROFILE \
    --cache-control "public, max-age=0, must-revalidate" \
    --include "*.html" \
    --include "*.xml" \
    --include "*.txt"

# Set correct content types
log_info "Setting correct content types..."
aws s3 cp "s3://$BUCKET_NAME" "s3://$BUCKET_NAME" \
    --profile $PROFILE \
    --recursive \
    --metadata-directive REPLACE \
    --content-type "text/html" \
    --exclude "*" \
    --include "*.html"

# Get website URL
WEBSITE_URL="http://$BUCKET_NAME.s3-website-$REGION.amazonaws.com"

log_success "Deployment completed successfully!"
echo ""
echo -e "${GREEN}🌐 Website URL: ${WEBSITE_URL}${NC}"
echo -e "${BLUE}📊 S3 Console: https://console.aws.amazon.com/s3/buckets/${BUCKET_NAME}${NC}"
echo ""

# Optional: Open website in browser (uncomment if desired)
# open $WEBSITE_URL

log_info "Deployment script completed!"

# 🚀 Deploy Mihisoft Next.js Website to AWS S3

## 📋 Prerequisites

1. **AWS Account** with appropriate permissions
2. **AWS CLI** installed and configured
3. **Node.js & npm** installed
4. **S3 Bucket** created for hosting

## 🔧 Setup Instructions

### Step 1: Install AWS CLI (if not installed)
```bash
# For macOS
brew install awscli

# For Ubuntu/Debian
sudo apt-get install awscli

# For Windows
# Download from: https://aws.amazon.com/cli/
```

### Step 2: Configure AWS CLI
```bash
aws configure
# Enter your:
# - AWS Access Key ID
# - AWS Secret Access Key
# - Default region (e.g., us-east-1)
# - Output format (json)
```

### Step 3: Create S3 Bucket (if not exists)
```bash
# Replace 'your-bucket-name' with your actual bucket name
aws s3 mb s3://mihisoft-website --region us-east-1
```

### Step 4: Configure Bucket for Static Website Hosting
```bash
# Enable static website hosting
aws s3 website s3://mihisoft-website \
  --index-document index.html \
  --error-document 404.html
```

### Step 5: Set Bucket Policy for Public Access
Create a bucket policy file and apply it:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::mihisoft-website/*"
    }
  ]
}
```

Apply the policy:
```bash
aws s3api put-bucket-policy \
  --bucket mihisoft-website \
  --policy file://bucket-policy.json
```

## 🚀 Deployment Commands

### Build and Export the Static Site
```bash
# Install dependencies
npm install

# Build and export static files
npm run build

# The static files will be in the 'out' directory
```

### Deploy to S3
```bash
# Sync the out directory to S3 bucket
aws s3 sync out/ s3://mihisoft-website \
  --delete \
  --cache-control "public, max-age=31536000" \
  --exclude "*.html" \
  --exclude "*.xml"

# Upload HTML files with shorter cache
aws s3 sync out/ s3://mihisoft-website \
  --delete \
  --cache-control "public, max-age=0, must-revalidate" \
  --include "*.html" \
  --include "*.xml"
```

## 🔄 Automated Deployment Script

Create `deploy.sh` script for easy deployment:

```bash
#!/bin/bash

echo "🚀 Starting deployment to S3..."

# Build the project
echo "📦 Building Next.js project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Deploy to S3
    echo "☁️ Deploying to S3..."
    
    # Upload static assets with long cache
    aws s3 sync out/ s3://mihisoft-website \
        --delete \
        --cache-control "public, max-age=31536000" \
        --exclude "*.html" \
        --exclude "*.xml"
    
    # Upload HTML files with short cache
    aws s3 sync out/ s3://mihisoft-website \
        --cache-control "public, max-age=0, must-revalidate" \
        --include "*.html" \
        --include "*.xml"
    
    echo "🎉 Deployment completed successfully!"
    echo "🌐 Website URL: http://mihisoft-website.s3-website-us-east-1.amazonaws.com"
else
    echo "❌ Build failed! Please fix errors and try again."
    exit 1
fi
```

## 🌐 CloudFront Distribution (Recommended)

For better performance and HTTPS, set up CloudFront:

### Create CloudFront Distribution
```bash
aws cloudfront create-distribution \
  --distribution-config file://cloudfront-config.json
```

### CloudFront Configuration Example
```json
{
  "CallerReference": "mihisoft-$(date +%s)",
  "DefaultCacheBehavior": {
    "TargetOriginId": "S3-mihisoft-website",
    "ViewerProtocolPolicy": "redirect-to-https",
    "TrustedSigners": {
      "Enabled": false,
      "Quantity": 0
    },
    "ForwardedValues": {
      "QueryString": false,
      "Cookies": {"Forward": "none"}
    },
    "MinTTL": 0
  },
  "Origins": {
    "Quantity": 1,
    "Items": [
      {
        "Id": "S3-mihisoft-website",
        "DomainName": "mihisoft-website.s3.amazonaws.com",
        "S3OriginConfig": {
          "OriginAccessIdentity": ""
        }
      }
    ]
  },
  "Comment": "Mihisoft Website Distribution",
  "Enabled": true
}
```

## 🔒 Security Best Practices

1. **Use IAM Roles** with minimal required permissions
2. **Enable CloudTrail** for audit logging
3. **Set up CloudFront** for HTTPS and better performance
4. **Use Route 53** for custom domain management
5. **Enable S3 access logging** for monitoring

## 📊 Monitoring & Analytics

1. **CloudWatch** for monitoring
2. **Google Analytics** (already configured in your app)
3. **S3 access logs** for traffic analysis

## 🔄 CI/CD Pipeline (Optional)

For automated deployments, consider:
- **GitHub Actions**
- **AWS CodePipeline**
- **GitLab CI/CD**

## 💡 Cost Optimization

1. **S3 Intelligent Tiering** for automatic cost optimization
2. **CloudFront caching** to reduce S3 requests
3. **Compress assets** during build process
4. **Use appropriate cache headers**

## 🚨 Troubleshooting

### Common Issues:
1. **404 Errors**: Ensure `trailingSlash: true` in next.config.ts
2. **Images Not Loading**: Verify `unoptimized: true` in images config
3. **CSS/JS Not Loading**: Check CORS and bucket policy
4. **Build Failures**: Remove any server-side features

## 📞 Support

For issues or questions:
- Check AWS documentation
- Review Next.js static export docs
- Contact your DevOps team

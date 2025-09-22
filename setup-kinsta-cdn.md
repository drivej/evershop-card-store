# Kinsta CDN Setup for EverShop

## 🚀 Quick Setup Guide

### **Step 1: Configure Environment Variables**

In your Kinsta Application Hosting dashboard, set these environment variables:

```bash
# Enable Kinsta CDN storage
FILE_STORAGE=kinsta

# Kinsta CDN Configuration
KINSTA_PUBLIC_URL=https://your-app-name.kinsta.app
KINSTA_CDN_URL=https://your-app-name.kinsta.app
KINSTA_STORAGE_PATH=/app/media
```

**Replace `your-app-name` with your actual Kinsta application name.**

### **Step 2: Enable Persistent Storage (Optional)**

If you want uploaded images to persist across deployments:

1. Go to your Kinsta Application dashboard
2. Navigate to "Settings" → "Persistent Storage"
3. Add a persistent volume:
   - **Mount Path**: `/app/media`
   - **Size**: Choose based on your needs (e.g., 5GB)

### **Step 3: Deploy Your Application**

```bash
git add .
git commit -m "Configure Kinsta CDN for image storage"
git push origin master
```

## 📁 **How It Works**

### **Local Development**
- Uses `FILE_STORAGE=local` 
- Images stored in `media/` directory
- Served at `http://localhost:3000/assets/*`

### **Kinsta Production**
- Uses `FILE_STORAGE=kinsta`
- Images stored in `/app/media` (persistent storage)
- Served at `https://your-app-name.kinsta.app/assets/*`
- Automatically uses Kinsta's CDN for fast delivery

## 🔧 **Configuration Options**

| Environment Variable | Description | Example |
|---------------------|-------------|---------|
| `FILE_STORAGE` | Storage type | `kinsta` |
| `KINSTA_PUBLIC_URL` | Your app's public URL | `https://mystore.kinsta.app` |
| `KINSTA_CDN_URL` | CDN URL (usually same as public URL) | `https://mystore.kinsta.app` |
| `KINSTA_STORAGE_PATH` | Storage path in container | `/app/media` |

## ✅ **Benefits of Kinsta CDN**

- **Fast Global Delivery**: Kinsta's CDN serves images from edge locations worldwide
- **Automatic Optimization**: Images are automatically optimized for web delivery
- **No External Dependencies**: No need for AWS S3 or other cloud storage
- **Cost Effective**: Included with your Kinsta hosting plan
- **Easy Setup**: Just set environment variables and deploy

## 🔄 **Switching Between Storage Types**

You can easily switch between storage types by changing the `FILE_STORAGE` environment variable:

- `local` - Local file storage (development)
- `kinsta` - Kinsta CDN storage (production)
- `s3` - AWS S3 + CloudFront (if you prefer AWS)

## 🧪 **Testing**

After deployment, test image uploads:

1. Go to your EverShop admin panel
2. Upload a product image
3. Check that the image URL uses your Kinsta domain
4. Verify the image loads quickly from the CDN

## 📞 **Support**

If you encounter issues:
1. Check Kinsta Application logs in your dashboard
2. Verify environment variables are set correctly
3. Ensure persistent storage is configured if needed

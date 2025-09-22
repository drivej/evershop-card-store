# Kinsta CDN Setup for EverShop

## 🚀 Quick Setup Guide

### **Step 1: Create a Kinsta Disk (Required for Production)**

**⚠️ Important**: Without a disk, uploaded images will be lost when your app restarts!

1. Go to your Kinsta Application dashboard
2. Navigate to **"Disks"** section
3. Click **"Add disk"**
4. Configure the disk:
   - **Name**: `evershop-media` (or any name you prefer)
   - **Size**: Start with **5GB** (see size recommendations below)
   - **Mount path**: `/app/media`
5. **Attach to Web process**: Ensure the disk is attached to your Web process

#### **Disk Size Recommendations:**
| Store Size | Recommended Disk Size |
|------------|----------------------|
| Small (< 100 products) | 2-5GB |
| Medium (100-1000 products) | 5-20GB |
| Large (1000+ products) | 20GB+ |

### **Step 2: Configure Environment Variables**

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
- Images stored in `/app/media` (Kinsta disk - persistent storage)
- Served at `https://your-app-name.kinsta.app/assets/*`
- Automatically uses Kinsta's CDN for fast delivery

### **Why You Need a Kinsta Disk:**

**Without a disk:**
- ❌ Images disappear when your app restarts/redeploys
- ❌ No persistence across deployments
- ❌ Lost user uploads during scaling events

**With a Kinsta disk:**
- ✅ Images persist across restarts and deployments
- ✅ Reliable storage for user-uploaded content
- ✅ Scalable and backed up by Kinsta

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
5. **Test persistence**: Restart your application and verify images are still accessible

## ⚠️ **Important Notes**

### **Disk Setup is Critical for Production**
- **Always create a Kinsta disk** for production deployments
- Without a disk, all uploaded images will be **permanently lost** on restart
- The disk ensures your customer's product images persist across deployments

### **Testing Without a Disk (Development Only)**
If you want to test without creating a disk (not recommended for production):
```bash
KINSTA_STORAGE_PATH=/tmp/media  # Temporary storage - will be lost!
```

## 📞 **Support**

If you encounter issues:
1. Check Kinsta Application logs in your dashboard
2. Verify environment variables are set correctly
3. Ensure persistent storage is configured if needed

# Beautiful Awareness Website - Deployment Guide

## 📦 Quick Deployment

This package contains a complete static website ready for deployment to any web server.

### 🚀 Deployment Steps

1. **Extract Files**
   ```bash
   unzip beautiful-awareness-website.zip
   cd website/
   ```

2. **Upload to Server**
   - Upload all contents of the `website` folder to your web server root directory
   - Or upload the entire `website` folder as a subdirectory

3. **Access Website**
   - Visit your domain directly in a web browser

### 🔧 Server Requirements

- **Minimum**: Any web server supporting static files
- **Recommended**: Apache, Nginx, IIS, Caddy
- **HTTPS Support**: SSL certificate recommended  
- **MIME Types**: Ensure server handles `.svg` files correctly

### 📁 File Structure

```
website/
├── index.html          # Main page - must be in server root or subdirectory
├── assets/             # Static assets directory
│   ├── css/
│   │   └── style.css   # Main stylesheet
│   ├── js/
│   │   └── script.js   # Interactive scripts
│   └── svg/            # Icon library (10 SVG files)
└── README.md           # Project documentation
```

### 🌐 Online Testing

After deployment, please verify:
- [x] Page loads correctly
- [x] CSS styles display properly
- [x] JavaScript interactions work
- [x] SVG icons display
- [x] Responsive layout
- [x] Navigation anchor links
- [x] External links function

### 📱 Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 55+  
- ✅ Safari 12+
- ✅ Edge 79+
- ⚠️ IE 11 (basic functionality)

### 🔗 External Dependencies

The website uses these online resources (requires internet connection):
- Google Fonts
- Material Symbols  
- Company logos and QR code (docs.bccsw.cn)

### 📞 Technical Support

- **Company**: Chongqing United Liege Technology Co., Ltd.
- **Email**: bccsw@cqlhlg.work  
- **Phone**: 023-68726872
- **License**: 渝ICP备2024023473号

---

© 2025 Chongqing United Liege Technology Co., Ltd. | Authors: United Liege (Southwest Center) Medical Team
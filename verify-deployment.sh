#!/bin/bash

# Beautiful Awareness Website Deployment Verification Script
# 美的觉醒网站部署验证脚本

echo "🚀 Beautiful Awareness Website Deployment Verification"
echo "=================================================="

# Check if zip file exists
if [ ! -f "beautiful-awareness-website-v20250821.zip" ]; then
    echo "❌ Error: ZIP file not found!"
    exit 1
fi

echo "✅ ZIP file found"

# Create test directory
TEST_DIR="test-deployment"
if [ -d "$TEST_DIR" ]; then
    rm -rf "$TEST_DIR"
fi
mkdir "$TEST_DIR"

echo "📦 Extracting files to test directory..."
unzip -q "beautiful-awareness-website-v20250821.zip" -d "$TEST_DIR"

echo "🔍 Verifying file structure..."

# Check essential files
essential_files=(
    "index.html"
    "assets/css/style.css" 
    "assets/js/script.js"
    ".htaccess"
)

all_good=true
for file in "${essential_files[@]}"; do
    if [ -f "$TEST_DIR/$file" ]; then
        echo "✅ $file"
    else
        echo "❌ Missing: $file"
        all_good=false
    fi
done

# Check SVG icons
echo "🎨 Checking SVG icons..."
svg_count=$(find "$TEST_DIR/assets/svg" -name "*.svg" -type f | wc -l)
echo "📊 Found $svg_count SVG icons"

if [ $svg_count -eq 10 ]; then
    echo "✅ All SVG icons present"
else
    echo "⚠️  Expected 10 SVG icons, found $svg_count"
fi

# Check file sizes
echo "📏 File size verification..."
index_size=$(wc -c < "$TEST_DIR/index.html")
css_size=$(wc -c < "$TEST_DIR/assets/css/style.css")
js_size=$(wc -c < "$TEST_DIR/assets/js/script.js")

echo "   index.html: $(echo "scale=1; $index_size/1024" | bc) KB"
echo "   style.css:  $(echo "scale=1; $css_size/1024" | bc) KB"  
echo "   script.js:  $(echo "scale=1; $js_size/1024" | bc) KB"

# Summary
echo ""
echo "📋 Deployment Summary:"
echo "===================="
if [ "$all_good" = true ]; then
    echo "✅ All essential files verified"
    echo "🚀 Website is ready for deployment!"
    echo ""
    echo "📌 Next Steps:"
    echo "1. Upload contents of '$TEST_DIR' to your web server"
    echo "2. Ensure your server supports .htaccess (Apache)"
    echo "3. Test the website in a browser"
    echo "4. Enable HTTPS if available"
else
    echo "❌ Some files are missing. Please check the package."
fi

echo ""
echo "🔗 For technical support:"
echo "   Email: bccsw@cqlhlg.work"
echo "   Phone: 023-68726872"

# Clean up test directory
rm -rf "$TEST_DIR"
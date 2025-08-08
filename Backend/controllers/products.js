const Product = require('../models/Product');
const fs = require('fs');
const path = require('path');


exports.getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      success: true,
      count: products.length,
      data: products
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// @desc    Get single product
// @route   GET /api/products/:id
// @access  Public
exports.getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        error: 'Product not found'
      });
    }

    res.status(200).json({
      success: true,
      data: product
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

exports.createProduct = async (req, res, next) => {
  try {
    // Handle image upload (assuming you're using base64 encoded images from frontend)
    let imagePath = '';
    if (req.body.image) {
      // Save base64 image to file
      const matches = req.body.image.match(/^data:([A-Za-z-+/]+);base64,(.+)$/);
      if (matches && matches.length === 3) {
        const type = matches[1];
        const data = matches[2];
        const buffer = Buffer.from(data, 'base64');
        const fileName = `product-${Date.now()}.${type.split('/')[1]}`;
        const filePath = path.join(__dirname, '../uploads', fileName);
        
        fs.writeFileSync(filePath, buffer);
        imagePath = `/uploads/${fileName}`;
      }
    }

    const product = await Product.create({
      ...req.body,
      image: imagePath || req.body.image
    });

    res.status(201).json({
      success: true,
      data: product
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message);
      return res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  }
};

// @desc    Update product
// @route   PUT /api/products/:id
// @access  Private
exports.updateProduct = async (req, res, next) => {
  try {
    let product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        error: 'Product not found'
      });
    }

    // Handle image update
    let imagePath = product.image;
    if (req.body.image && req.body.image !== product.image) {
      // Delete old image if it exists in uploads folder
      if (product.image.startsWith('/uploads/')) {
        const oldImagePath = path.join(__dirname, '..', product.image);
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }

      // Save new base64 image to file
      const matches = req.body.image.match(/^data:([A-Za-z-+/]+);base64,(.+)$/);
      if (matches && matches.length === 3) {
        const type = matches[1];
        const data = matches[2];
        const buffer = Buffer.from(data, 'base64');
        const fileName = `product-${Date.now()}.${type.split('/')[1]}`;
        const filePath = path.join(__dirname, '../uploads', fileName);
        
        fs.writeFileSync(filePath, buffer);
        imagePath = `/uploads/${fileName}`;
      }
    }

    product = await Product.findByIdAndUpdate(req.params.id, {
      ...req.body,
      image: imagePath
    }, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      success: true,
      data: product
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message);
      return res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  }
};

// @desc    Delete product
// @route   DELETE /api/products/:id
// @access  Private
exports.deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        error: 'Product not found'
      });
    }

    // Delete image file if it exists in uploads folder
    if (product.image.startsWith('/uploads/')) {
      const imagePath = path.join(__dirname, '..', product.image);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    await product.remove();

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};
// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
// A product can only belong to one category, but a category can have multiple products
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Categories have many Products
// A category can have multiple products, but a product can only belong to one category
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
// A product can have multiple tags, and a tag can have many products
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});

// Tags belongToMany Products (through ProductTag)
// A tag can have multiple products, and a product can have many tags
Tag.belongsToMany(Product, {
  through: ProductTag, 
  foreignKey: 'tag_id',
});

// export models
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try {
    const categoryData = await Category.findAll({
  // be sure to include its associated Products
      include: [{ model: Product }],
    });
  // Send JSON response with categories and their associated products
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    const category = await Category.findOne({
      where: {
        id: req.params.id,
      },
      // be sure to include its associated Products
      include: [{ model: Product }],
    });
    // Send JSON response with category and its associated products
    res.json(category);
  } catch (error) {
    res.status(400).json(error);
  }
});


router.post('/', async (req, res) => {
  // create a new category
  try {
    const category = await Category.create(req.body);
    // Send JSON response with new category
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const category = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    // Send JSON response with updated category
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const deletedCategory = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(deletedCategory);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;

const CategoriesService = require("../services/categories.service");

const createCategory = async (req, res) => {
  try {
    const createNew = req.body;
    const result = await CategoriesService.create(createNew);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await CategoriesService.delete(id);
    res.status(200).json({
        message: "has been deleted",
        data: result
    });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  createCategory,
  deleteCategory,
};

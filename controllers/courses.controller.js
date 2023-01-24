const CoursesServices = require("../services/courses.service");

const getAllCourse = async (req, res) => {
  try {
    const result = await CoursesServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getCourseWithCategoryAndVideo = async (req, res) => {
  try {
    const result = await CoursesServices.getByCategoryAndVideo();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const createCourse = async (req, res) => {
  try {
    const newCourse = req.body;
    const result = CoursesServices.createNew(newCourse);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const updateCourse = async (req, res) => {
  try {
    const field = req.body;
    const { id } = req.params;
    const result = await CoursesServices.update(field, id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  getAllCourse,
  getCourseWithCategoryAndVideo,
  createCourse,
  updateCourse,
};

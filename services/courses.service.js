const Categories = require("../models/categories.model");
const Courses = require("../models/courses.model");
const Videos = require("../models/videos.model");

class CoursesServices {
  static async getAll() {
    try {
      const result = await Courses.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getByCategoryAndVideo() {
    try {
      const result = await Courses.findAll({
        include: [
          {
            model: Categories,
            as: "categories",
            attributes: ["name"],
          },
          {
            model: Videos,
            as: "videos",
            attributes: ["title", "url"],
          },
        ],
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async createNew(newCourse){
    try {
        const result = await Courses.create(newCourse);
        return result;
    } catch (error) {
        throw error;
    }
  }
  static async update(field, id){
    try {
        const result = await Courses.update(field,{
            where: {id},
        });
        return result;
    } catch (error) {
        throw error;
    }
  }
}

module.exports = CoursesServices;

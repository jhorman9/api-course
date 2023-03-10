const Videos = require("../models/videos.model");

class VideoServices {
  static async create(createNew) {
    try {
      const result = await Videos.create(createNew);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async delete(id) {
    try {
      const result = await Videos.destroy({
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = VideoServices;

const VideoServices = require("../services/videos.service");

const createVideo = async (req, res) => {
  try {
    const createNew = req.body;
    const result = await VideoServices.create(createNew);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const deleteVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await VideoServices.delete(id);
    res.status(200).json({
      message: "has been deleted",
      data: result,
    });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  createVideo,
  deleteVideo,
};
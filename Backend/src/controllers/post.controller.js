const postModel = require("../models/post.model");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");

const imageKit = new ImageKit({
  privateKey: process.env["IMAGEKIT_PRIVATE_KEY"],
});

async function createPost(req, res) {
  console.log(req.body, req.file);

  const response = await imageKit.upload.files({
    file: await toFile(Buffer.from(req.file.buffer, "file")),
    fileName: req.file.originalname,
    folder: "myinstagram",
  });

  res.status(200).json({
    message: "Post uploaded successfully",
    response,
  });
}

module.exports = {
  createPost,
};

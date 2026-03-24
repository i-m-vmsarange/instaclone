const express = require("express");
const postRouter = express.Router();
const postController = require("../controllers/post.controller");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const identifyUser = require("../middlewares/auth.middleware");

/**
 * @route POST  api/post/upload
 * @description user can upload the post
 *
 */

postRouter.post(
  "/upload",
  upload.single("imgUrl"),
  identifyUser,
  postController.createPost,
);

module.exports = postRouter;

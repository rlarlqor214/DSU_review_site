const { post } = require("../../app");
const boardService = require("../services/boardService");

exports.loginPage = async (req, res) => {
  try {
    return res.render("login", {});
  } catch (error) {
    return res.status(500).json(error);
  }
};
exports.selectAllPosts = async (req, res) => {
  try {
    let posts = await boardService.selectAllPosts();
    return res.render("index", {
      posts: posts,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.selectPostDetail = async (req, res) => {
  let { post_uid } = req.params;
  // detail 변수를 불러와라
  // postDetail 이란 곳에 담아라
  try {
    let postDetail = await boardService.selectPostDetail(post_uid);
    return res.render("detail", {
      postDetail: postDetail,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.writePost = async (req, res) => {
  const { post_title, post_content, post_writer } = req.body;

  try {
    let results = await boardService.writePost(
      post_title,
      post_content,
      post_writer
    );
    let postDetail = await boardService.selectPostDetail(results[0].insertId);
    return res.render("detail", {
      postDetail: postDetail,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.writePage = async (req, res) => {
  try {
    return res.render("write");
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.modifyPost = async (req, res) => {
  const { post_title, post_content, post_writer } = req.body;
  const { post_uid } = req.params;

  try {
    await boardService.modifyPost(
      post_title,
      post_content,
      post_writer,
      post_uid
    );
    let postDetail = await boardService.selectPostDetail(post_uid);
    return res.render("detail", {
      postDetail: postDetail,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.modifyPage = async (req, res) => {
  let { post_uid } = req.params;

  try {
    let postDetail = await boardService.selectPostDetail(post_uid);
    return res.render("modify", {
      postDetail: postDetail,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.deletePost = async (req, res) => {
  let { post_uid } = req.params;

  try {
    await boardService.deletePost(post_uid);
    return res.redirect("/");
  } catch (error) {
    return res.status(500).json(error);
  }
};

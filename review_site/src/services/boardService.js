const res = require("express/lib/response");
const pool = require("../../db/db");
const boardQuery = require("../queries/boardQuery");

exports.selectAllPosts = async () => {
  try {
    let posts = await pool.query(boardQuery.selectAllPosts);
    console.log(posts);
    return posts[0];
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
};

exports.selectPostDetail = async (post_uid) => {
  try {
    let detail = await pool.query(boardQuery.selectPostDetail, [post_uid]);
    console.log(detail[0]);
    return detail[0];
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
};

exports.writePost = async (post_title, post_content, post_writer) => {
  try {
    let result = await pool.query(boardQuery.writePost, [
      post_title,
      post_content,
      post_writer,
    ]);
    return result;
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
};

exports.deletePost = async (post_uid) => {
  try {
    let result = await pool.query(boardQuery.deletePost, [post_uid]);
    return result;
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
};

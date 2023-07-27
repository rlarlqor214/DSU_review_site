exports.selectAllPosts =
  "select post_uid, post_title, post_writer from review_table";
exports.selectPostDetail = "select * from review_table where post_uid = ?";
exports.writePost =
  "insert into review_table(post_title, post_content, post_writer) values(?, ?, ?)";
exports.modifyPost =
  "update review_table set post_title=?, post_content=?, post_writer=? where post_uid=?";
exports.deletePost = "delete from review_table where post_uid=?";

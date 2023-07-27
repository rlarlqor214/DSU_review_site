var express = require("express");
var router = express.Router();

const boardController = require("../controllers/boardController");

/* 로그인 페이지 */
router.get("/login", boardController.loginPage);
/* 목록 */
router.get("/main", boardController.selectAllPosts);

/* 상세보기 */
router.get("/posts/:post_uid", boardController.selectPostDetail);

/* 추가 */
router.post("/main", boardController.writePost);

/* 추가 페이지 */
router.get("/write", boardController.writePage);

/* 수정 */
router.patch("/:post_uid", boardController.modifyPost);

/* 수정 페이지 */
router.get("/modify/:post_uid", boardController.deletePost);

/* 삭제 */
router.delete("/:post_uid", boardController.deletePost);

/* 교양 선택 */
router.get("/choice", boardController.selectAllPosts);

module.exports = router;

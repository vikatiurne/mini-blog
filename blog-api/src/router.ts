const { Router } = require("express");
import postRouter from "./articles/post-routers";
import userRouter from "./users/user-router";
import commentRouter from "./comments/comment-router";

const router = new Router();

router.use("/post", postRouter);
router.use("/user", userRouter);
router.use("/comment", commentRouter);

export default router;

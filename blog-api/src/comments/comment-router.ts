import commentController from "./comment-controller";

const { Router } = require("express");

const router = new Router();

router.post("/createComment/:id", commentController.createComment);

export default router;

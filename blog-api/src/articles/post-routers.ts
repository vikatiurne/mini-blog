const { Router } = require("express");
import postControllers from "./post-controllers";

const router = new Router();

router.get("/getAllPosts", postControllers.getAllPosts);
router.post("/createPost", postControllers.createPost);
router.delete("/deletePost", postControllers.deletePost);

export default router;

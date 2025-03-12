import userController from "./user-controller";

const { Router } = require("express");

const router = new Router();

router.post("/createUser", userController.createUser);
router.get("/getAllUsers", userController.getAllUsers);

export default router;

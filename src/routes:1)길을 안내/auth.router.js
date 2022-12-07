//router : post , user 를 묶었다.
//user.js
//post.js 이런식으로 만들 수 있겠지.

const express = require("express");
const { useContainer } = require("typeorm");

const authController = require("../controllers/auth.controller");

const authRouter = express.Router();

authRouter.post("/signup", authController.signUp); //authController.signUp의 콜백함수, => controller로 가봐라
authRouter.post("/signin", authController.signIn); //index.js에서받아옴

module.exports = { authRouter };

//===> auth/signup

//if===> router.get('', loginRequired, postController.getPosts)
//loginRequired 와 postController.getPosts 의 관계
//

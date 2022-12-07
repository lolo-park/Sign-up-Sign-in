//index.js는 다양한 라우터들을 또 한번에 묶을 때 사용한다

const express = require("express");

const { authRouter } = require("./auth.router");

const routes = express.Router();

routes.use("/auth", authRouter); //==> app.js 의 app.use(routes)에서 얘로 먼저 들어 온것 그리고 authRouter함수가 발동

module.exports = { routes };

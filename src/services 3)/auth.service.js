//회바회의 business logic을 따른다.
//데이터의 필터링 역할을 하는 logic들만 적는다.
//like, e-amil이 규격에 맞는지, password가 규격에 맞는지 ..

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userDao = require("../models/user.dao");
const { validateEmail } = require("../utils/validators");

const signUp = async (email, password) => {
  validateEmail(email);

  const user = await userDao.getUserByEmail(email);

  if (user) {
    const err = new Error("duplicated email");
    err.statusCode = 400;
    throw err;
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  await userDao.createUser(email, hashedPassword);
};

const signIn = async (email, password) => {
  const user = await userDao.getUserByEmail(email);

  if (!user) {
    const err = new Error("specified user does not exist");
    err.statusCode = 404;
    throw err;
  }

  const result = await bcrypt.compare(password, user.password);

  if (!result) {
    const err = new Error("invalid password");
    err.statusCode = 401;
    throw err;
  }

  return jwt.sign({ sub: user.id, email: user.email }, process.env.JWT_SECRET);
};

module.exports = { signUp, signIn };

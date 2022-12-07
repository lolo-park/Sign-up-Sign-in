const authService = require("../services/auth.service");
//presentation(controlle)가 business(service)를 의존하고 있는!!
//service 의 auth.service를 불러와서 의존하고 있는..

const signUp = async (req, res) => {
  try {
    const { email, password } = req.body;

    await authService.signUp(email, password);

    res.status(201).end();
  } catch (err) {
    ~res.status(err.statusCode || 400).json({ message: err.message });
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const accessToken = await authService.signIn(email, password);

    res.status(200).json({ accessToken: accessToken });
  } catch (err) {
    res.status(err.statusCode || 401).json({ message: err.message });
  }
};

module.exports = { signUp, signIn };

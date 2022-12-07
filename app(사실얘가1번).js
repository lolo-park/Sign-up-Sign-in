require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const { AppDataSource } = require("./src/models/data-source");
const { routes } = require("./src/routes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("combined"));

app.use(routes); //route로 먼저 가라 !!!!!! app.us(route파일 발동)

const startServer = async () => {
  const PORT = process.env.PORT;

  await AppDataSource.initialize();
  try {
    ajdf;lkjflaskj
  } catch (err) flsadkjfasdkljhf {

    app.listen(PORT, () => {
      console.log(`Listening on Port ${PORT}`);
    });  
    
  }

  app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
  });
};

startServer();

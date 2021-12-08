require("dotenv").config();
global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;

const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");
const { swaggerUi, specs } = require("./swagger");
const { checkToken } = require("./modules/auth");

const app = express();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

const { PORT, MONGO_URI } = process.env;

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error"));
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
});
mongoose.Promise = global.Promise;

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.listen(PORT, () => console.log(`Example app listenling on port ${PORT}`));

// 공통 API를 등록한다
const common = require("./modules/common");
app.use("/", common);

// 작업물 관련 API를 등록한다
const works = require("./modules/works");
app.use("/work", works);

// ADMIN API를 등록한다
/**
 * @swagger
 * paths:
 *   /admin:
 *    get:
 *      tags: [관리자]
 *      summary: 관리자 인증 페이지 GET요청
 *      description: 관리자 페이지를 요청한다.
 *      parameters:
 *        - name: token
 *          in: header
 *          description: 헤더에 토큰을 입력하세요
 *          required: true
 *          schema:
 *            type: string
 *          value: <token>
 *      responses:
 *        200:
 *          description: OK
 *        400:
 *          description: Invalid request
 *        401:
 *          description: Token Expired
 */
app.get("/admin", checkToken, (req, res) => {
  res.send("admin Page");
});

import dotenv from "dotenv";
dotenv.config();
import util from "util"
global.TextEncoder = util.TextEncoder;
global.TextDecoder = util.TextDecoder;

import express from "express";
import cors from "cors";

import mongoose from "mongoose";
import swagger from "./swagger.js";
import auth from "./modules/auth.js";

const {swaggerUi, specs} = swagger;
const checkToken = auth.checkToken;

const app = express();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

const { PORT, MONGO_URI } = process.env;

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error"));
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
});
mongoose.Promise = global.Promise;

import bodyParser from "body-parser";
const { urlencoded, json } = bodyParser;
app.use(urlencoded({ extended: true }));
app.use(json());

app.use(cors());
app.listen(PORT, () => console.log(`Example app listenling on port ${PORT}`));

// 공통 API를 등록한다
import common from "./modules/common.js";
app.use("/", common);

// 작업물 관련 API를 등록한다
import works from "./modules/works.js";
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

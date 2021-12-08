const fs = require("fs");
const path = require("path");
const jwt = require("./jwt");

var express = require("express");
var router = express.Router();

router.get("/", (req, res) => res.send("Hello World"));

const getFile = (fileName) => {
  return fs.createReadStream(path.resolve("./img", `${fileName}`));
};
/**
 * @swagger
 * paths:
 *   /img/{filename}::
 *    get:
 *      tags: [이미지]
 *      summary: img 폴더 아래의 이미지 파일을 GET요청
 *      description: 이미지 파일을 stream으로 내려준다
 *      parameters:
 *        - name: filename
 *          in : path
 *          description: 이미지 파일명
 *          example: logo.png
 *      responses:
 *        200:
 *          description: OK
 *        400:
 *          description: Invalid request
 *        409:
 *          description: Not have that kind of image file
 */
router.get("/img/:fileName", (req, res) => {
  let count = 0;
  const stream = getFile(req.params.fileName);

  stream.on("data", function (data) {
    count = count + 1;
    console.log("data count =" + count);
    res.write(data);
  });

  stream.on("end", () => {
    res.end();
  });

  stream.on("error", function (err) {
    console.log(err);
    res.end("500 Internal Server " + err);
  });
});

/**
 * @swagger
 * paths:
 *   /login:
 *    post:
 *      tags: [로그인]
 *      produces:
 *        - application/json
 *      parameters:
 *        - in: body
 *          name: user
 *          description: The user to login.
 *          schema:
 *            type: object
 *            required: true
 *            properties:
 *              id:
 *                type: string
 *              password:
 *                type: string
 *      responses:
 *        200:
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                items:
 *                  $ref: '#/definitions/LoginUser'
 *        400:
 *          description: Invalid request
 *        409:
 *          description: Not have that kind of user
 */
router.post("/login", async (req, res) => {
  console.log(req.body);
  const { id, password } = req.body;
  if (id && password) {
    // id, password 있는지 DB에서 체크
    // const user = await User.getUserByEmail(email);

    // 토큰 발급
    const jwtToken = await jwt.sign({ id });
    res.status(200).send({
      result: true,
      accessToken: jwtToken.token,
      refreshToken: jwtToken.refreshToken,
      userInfo: {
        userName: "Yun HyeWon",
        userId: id,
      },
    });
  } else {
    res.status(401).send({
      result: false,
      errorMessage: "사용자의 아이디나 비밀번호가 맞지 않습니다",
    });
  }
});

module.exports = router;

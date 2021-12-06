const fs = require("fs");
const path = require("path");

var express = require("express");
var router = express.Router();

const { BASE_URL } = process.env;

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
router.post("/login", (req, res) => {
  console.log(req.body);
  const { id, password } = req.body;
  if (id && password) {
    res.send({
      result: true,
      accessToken:
        "dfkdfjskjfqfeljfalkjfeklfjafeffeafeafaefaefefefafdsghgjklklesddf",
      refreshToken:
        "dfdfdfdferererertytytytyioioioiojkjkjkjkbnbnbnbnqwqwqwqwxzxzxzx",
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

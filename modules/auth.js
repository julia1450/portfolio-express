import jwt from "../modules/jwt.js";
const TOKEN_EXPIRED = -3;
const TOKEN_INVALID = -2;

const authUtil = {
  checkToken: async (req, res, next) => {
    var token = req.headers.token;
    // 토큰 없음
    if (!token)
      return res.json(400, {
        result: false,
        message: "token 값이 없습니다",
      });
    const user = await jwt.verify(token);

    // 유효기간 만료
    if (user === TOKEN_EXPIRED)
      return res.status(401).json({
        result: false,
        message: "토큰 유효기간이 만료되었습니다",
      });
    // 유효하지 않는 토큰
    if (user === TOKEN_INVALID)
      return res.status(401).json({
        result: false,
        message: "토큰 값이 유효하지 않습니다",
      });
    if (user.id === undefined)
      return res.status(401).json({
        result: false,
        message: "토큰 값이 유효하지 않습니다",
      });
    req.id = user.id;
    next();
  },
};

export default authUtil;

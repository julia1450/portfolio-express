import jwt from 'jsonwebtoken'
import jwtConfig from "../config/secretKey.js"
const {
  secretKey,
  option,
  secretRefreshKey,
  refreshOption,
} = jwtConfig;
const TOKEN_EXPIRED = -3;
const TOKEN_INVALID = -2;

export default {
  sign: async (id) => {
    const result = {
      // sign메소드를 통해 access token 발급
      token: jwt.sign(id, secretKey, option),
      refreshToken: jwt.sign(id, secretRefreshKey, refreshOption),
    };
    return result;
  },
  verify: async (token) => {
    let decoded;
    try {
      // verify메소드를 통해 값 decode
      decoded = jwt.verify(token, secretKey);
      console.log(decoded, token, secretKey);
    } catch (err) {
      if (err.message === "jwt expired") {
        return TOKEN_EXPIRED;
      } else if (err.message === "invalid token") {
        return TOKEN_INVALID;
      } else {
        return TOKEN_INVALID;
      }
    }
    return decoded;
  },
};

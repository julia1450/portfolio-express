const secretKey = {
  secretKey: "YoUrSeCrEtKeY", // 원하는 시크릿 키
  secretRefreshKey: "YoUrSeCrEtReFreShKeY",
  option: {
    algorithm: "HS256", // 해싱 알고리즘
    expiresIn: "30m", // 토큰 유효 기간
    issuer: "issuer", // 발행자
  },
  refreshOption: {
    algorithm: "HS256", // 해싱 알고리즘
    expiresIn: "180 days", // 토큰 유효 기간
    issuer: "issuer", // 발행자
  },
};
export default secretKey;

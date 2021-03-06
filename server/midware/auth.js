module.exports = (app) => {
  return async (req, res, next) => {
    const jwt = require("jsonwebtoken");
    const adminUser = require("../model/User");

    //截取token
    const token = String(req.headers.authorization || "")
      .split(" ")
      .pop();

    //无token处理
    if (!token) {
      res.status(401).send({ message: "请先登录" });
    }

    //错误token处理

    const id = jwt.verify(token, process.env.token);
    req.user = await adminUser.findById(id);
    if (!req.user) {
      res.status(401).send({ message: "无效token!" });
    }

    await next();
  };
};

//var createError = require("http-errors");
const express = require("express");
//var path = require("path");
//var cookieParser = require("cookie-parser");
const db = require("./db/db");
//引入登录注册路由
const router = require("./routes");
const app = express();
db(() => {
  app.use(express.urlencoded({ extended: true })); //post请求的具体参数是username= &password=
  app.use(express.json()); //post请求的具体参数是json结构：{username: ,password:}
  //app.use(cookieParser());
  //app.use(express.static(path.join(__dirname, "public")));
  //登录注册
  app.use("/", router);

  // catch 404 and forward to error handler
  //app.use(function (req, res, next) {
  //  next(createError(404));
  //});
});
module.exports = app;

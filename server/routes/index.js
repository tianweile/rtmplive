const express = require("express");
const router = express.Router(); //得到路由器的对象
//引入用户模型
const usersModel = require("../model/usersModel");
/* 登录页面 */
router.post("/login", (req, res) => {
  //获取输入
  const { username, password } = req.body;
  // 根据username和password查询数据库users, 如果没有, 返回提示错误的信息, 如果有, 返回登陆成功信息(包含user)
  usersModel.findOne({ username, password }, (err, data) => {
    if (err) {
      //引入报警模块，当达到敏感阈值，触发报警
      console.log(err);
      res.send({ status: 1, msg: "当前网络不稳定，请稍后再试" });
      return;
    }
    if (data) {
      res.send({ status: 0, data, msg: "登录成功" });
      console.log(data);
      return;
    } else {
      res.send({ status: 1, msg: "用户名或密码输入错误" });
    }
  });
});

/* 注册页面 */
router.post("/register", (req, res) => {
  //获取输入
  const { username, password } = req.body;
  //去数据库中查询该用户名是否被注册过
  usersModel.findOne({ username }, function (err, data) {
    if (data) {
      //用户名注册过
      //引入计数模块--当达到一个敏感的阈值，触发一些安全性机制
      console.log(`用户名为${username}的用户注册失败,因为用户名重复`);
      res.send({ status: 1, msg: "该用户名已经被注册过，请重新注册" });
    } else {
      //用户名未被注册过
      usersModel.create({ username, password }, function (err) {
        if (!err) {
          //注册成功
          console.log(`用户名为${username}的用户注册成功`);
          res.send({ status: 0, msg: "注册成功了" });
        } else {
          //注册失败
          //引入报警模块，当达到敏感阈值，触发报警
          console.log(err);
          res.send({ status: 1, msg: "您当前的网络状态不佳，请稍后再试" });
        }
      });
    }
  });
});
module.exports = router;

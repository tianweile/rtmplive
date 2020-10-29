/**
 * 包含应用中所有请求接口的函数：接口请求函数
 */
import ajax from "./ajax";
const BASE = "";
//请求登录
export const reqLogin = (username, password) =>
  ajax.post(BASE + "/login", { username, password });
// ajax({
//   method: "post", //post请求
//   url: BASE + "/login", //请求url地址
//   data: {
//     //通过形参接收，通过实参传递
//     username,
//     password,
//   },
// });

//请求注册
export const reqRegister = (username, password) =>
  ajax.post(BASE + "/register", { username, password });
// ajax({
//   method: "post", //post请求
//   url: BASE + "/register", //请求url地址
//   data: {
//     //通过形参接收，通过实参传递
//     username,
//     password,
//   },
// });

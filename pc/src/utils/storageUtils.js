/**
 * 操作local数据的工具函数模块
 */
const USER_KEY = "user_key"; // eslint-disable-line no-unused-vars
export default {
  /**
   * 保存user
   */
  saveUser(user) {
    localStorage.setItem("USER_KEY", JSON.stringify(user));
  },
  /**
   * 返回一个user对象，如果没有返回一个{}
   */
  getUser() {
    return JSON.parse(localStorage.getItem("USER_KEY") || "{}");
  },
  /**
   * 删除保存的user
   */
  removeUser() {
    localStorage.removeItem("USER_KEY");
  },
};

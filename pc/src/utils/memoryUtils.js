import storageUtils from "./storageUtils";
export default {
  user: storageUtils.getUser(), //用来存储用户登录的信息，初始值为local中读取的user
};

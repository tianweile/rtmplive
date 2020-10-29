var mongoose = require("mongoose");
//引入模式对象，schema是数据库的组织和结构
var Schema = mongoose.Schema;
//创建约束对象，users数据库集合规则
var usersSchema = new Schema({
  username: {
    type: String, //限制姓名必须为字符串
    required: true, //限制用户名不能为空
    unique: true, //限制用户名是惟一的
  },
  password: {
    type: String, //限制密码必须为字符串
    required: true, //限制密码不能为空
  },
  data: {
    type: Date, //时间类型
    default: Date.now(), //默认值
  },
  enable_flag: {
    type: String, //字符串类型
    default: "Y",
  },
});
//创建模型对象，生成users集合的模型对象
var usersModel = mongoose.model("users", usersSchema);
module.exports = usersModel
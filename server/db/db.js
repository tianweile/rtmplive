/**
 * 连接数据库，判断数据库的连接状态
 */
var mongoose = require("mongoose");//引入mongoose
mongoose.set("useCreateIndex", true); //使用一个新的索引创建器
//const定义常量
const DB_NAME = "react-live"//数据库集合名称
const PORT = 27017 //端口号
const IP = "localhost" //IP地址

//定义一个连接数据库的函数
function connectMongo(callback) {
    mongoose.connect(`mongodb://${IP}:${PORT}/${DB_NAME}`, {
    useNewUrlParser: true, //使用一个新的URL解析器，用于解决一些安全问题
    useUnifiedTopology: true, //使用一个统一的新的拓扑结构
    });
    //绑定数据库连接的监听
    mongoose.connection.on("open", function (err) {
    if (err) {
        console.log("数据库连接失败", err);
        callback("connect failed")
    } else {
        console.log("数据库连接成功");
        callback()
    }
    });
}
module.exports = connectMongo

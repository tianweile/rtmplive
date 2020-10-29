/**
 * 封装能发ajax的请求函数
 * 1、解决post请求携带参数的问题，默认是json，需要转换为urlencode格式
 * 2、让请求成功的结果不是response，而是response.data的值
 * 3、统一处理所有请求的错误
 */
import axios from "axios";
import qs from "qs";
import { message } from "antd";
//添加请求拦截器:host请求的请求体格式为urlencoded格式 a=1&b=2
//在发请求前执行
axios.interceptors.request.use(
  function (config) {
    //得到请求方式和请求数据
    const { method, data } = config;
    //处理post请求，将data对象转换为query参数格式字符串
    if (method.toLowerCase() === "post" && typeof data === "object") {
      config.data = qs.stringify(data);
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

//添加响应拦截器：1、让请求成功的结果不是response，而是response.data的值 2、统一处理所有请求的错误
//在请求返回之后且在我们指定的请求回调函数之后
axios.interceptors.response.use(
  function (response) {
    return response.data; //返回的结果会交给我们指定的请求相应的回调
  },
  function (error) {
    //统一处理所有请求的错误
    message.error("请求出错了" + error.message);
    //alert("请求出错了" + error.message);
    //return Promise.reject(error)
    //返回一个pending状态的promise，中断promise链
    return new Promise(() => {});
  }
);

export default axios;

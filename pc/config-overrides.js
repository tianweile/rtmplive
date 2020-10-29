const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    //配置上的babel-plugin-import
    libraryName: "antd", //针对的是antd
    libraryDirectory: "es", //源码文件夹中的es
    style: true, // change importing css to less
  }),
  //改变antd的样式
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@primary-color": "#4a2fd0", //全局颜色
      "@border-radius-base": "3px", // 组件/浮层圆角
      "@font-size-base": "20px", // 主字号
    },
  })
);

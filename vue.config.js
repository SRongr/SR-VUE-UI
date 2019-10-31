const path = require("path");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const WebpackDeepScopeAnalysisPlugin = require('webpack-deep-scope-plugin').default
module.exports = {
  // 修改默认的入口
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html"
    }
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      // mutate config for production...'
      config.mode = "production";
      return {
        optimization: {
          minimizer: [new UglifyJsPlugin({
            include: /.js/
          }),
          new WebpackDeepScopeAnalysisPlugin()
        ],
        }
      };
    } else {
      // mutate for development...
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("@", path.resolve("src"))
      .set("~", path.resolve("packages"));
    // lib目录是组件库最终打包好存放的地方，不需要eslint检查
    // examples/docs是存放md文档的地方，也不需要eslint检查
    config.module
      .rule("eslint")
      .exclude.add(path.resolve("lib"))
      .end()
      .exclude.add(path.resolve("src/docs"))
      .end();
    // packages和examples目录需要加入编译
    config.module
      .rule("js")
      .include.add(/packages/)
      .end()
      .include.add(/src/)
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap(options => {
        // 修改它的选项...
        return options;
      });
  }
};

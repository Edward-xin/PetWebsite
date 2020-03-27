// vue.config.js
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
  // return path.join(__dirname, '..', dir)
}
module.exports = {
  configureWebpack: {
    resolve: {
      // 后缀省略
      extensions: ['.js', '.vue', '.json'],
      // 路径别名
      alias: {
        // import Vue from 'vue/dist/vue.esm.js'
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src')
      }
    },
  },
  // 解决跨域问题
  devServer: {
    proxy: {
      '/api': {
        // 目标地址
        target: 'http://localhost:5000',
        // 是否跨域
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
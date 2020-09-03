'use strict'
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: 8010,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/weather': {
        target: 'https://www.tianqiapi.com', // 天气接口地址
        secure: false, // false为http访问，true为https访问
        changeOrigin: true, // 跨域访问设置，true代表跨域
        pathRewrite: { // 路径改写规则
          '^/weather': '' // 以/proxy为开头的改写为''
        }
      }
      // '/api': {
      //   target: process.env.VUE_APP_BASE_API,
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/api': 'api'
      //   }
      // }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    // 警告 webpack 的性能提示
    performance: {
      hints: 'warning',
      // 入口起点的最大体积
      maxEntrypointSize: 50000000,
      // 生成文件的最大体积
      maxAssetSize: 30000000,
      // 只给出 js 文件的性能提示
      assetFilter: function(assetFilename) {
        return assetFilename.endsWith('.js')
      }
    }

  },
  chainWebpack(config) {
    config.plugins.delete('preload') // TODO: need test
    config.plugins.delete('prefetch') // TODO: need test
    // set preserveWhitespace
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()

    config
      // https://webpack.js.org/configuration/devtool/#development
      .when(process.env.NODE_ENV === 'development',
        config => config.devtool('cheap-source-map')
      )
  }
}

const { isProd } = require('./configs/vue/common')


module.exports = {
  lintOnSave: false,

  css: {
    sourceMap: true,
    extract: isProd,
    loaderOptions: {
      scss: {
        prependData: '@import "@/assets/scss/variables";',
      },
    },
  },

  configureWebpack: {
    devtool: 'source-map',
  },

  devServer: {
    host: '0.0.0.0',
    hot: true,
    disableHostCheck: true,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
}

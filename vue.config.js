module.exports = {
  css: {
    extract: false
  },
  chainWebpack: config => {
    // config.module
    //   .rule('js')
    //   .include
    //   .add('/src')
    //   .end()
    //   .use('babel')
    //   .loader('babel-loader')
    //   .tap(options => {
    //     return options
    //   })

    // config.module.rule('eslint').uses.clear()
    // config.module.rule('eslint-loader').uses.clear()
  }
}

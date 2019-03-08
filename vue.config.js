module.exports = {
  lintOnSave: true,
  devServer: {
    proxy: 'http://localhost:5000',
  },
  publicPath: '/',
  outputDir: 'docs',
  assetsDir: undefined,
  runtimeCompiler: true,
  productionSourceMap: undefined,
  parallel: undefined,

  css: {
    sourceMap: true,
  },

  pluginOptions: {
    i18n: {
      locale: 'nb-no',
      fallbackLocale: 'nb-no',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
};

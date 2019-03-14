module.exports = {
  lintOnSave: true,
  devServer: {
    proxy: {
      '/api/*': {
        target: 'http://localhost:5000',
      },
    },
  },
  publicPath: '/',
  outputDir: 'docs',
  assetsDir: undefined,
  runtimeCompiler: false,
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

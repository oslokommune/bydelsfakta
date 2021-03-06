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
  assetsDir: '',
  runtimeCompiler: false,
  productionSourceMap: true,
  parallel: true,

  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule.use('babel-loader').loader('babel-loader').end().use('vue-svg-loader').loader('vue-svg-loader');
  },

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

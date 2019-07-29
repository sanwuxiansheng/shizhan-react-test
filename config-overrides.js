const { override, fixBabelImports } = require ('customize-cra');

module.exports = override(
  // 按需加载
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  // 自定义主题
  // addStylusLoader({
  //   javascriptEnabled: true,
  //   modifyVars: { '@primary-color': '#ccc' },
  // }),
);
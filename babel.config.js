module.exports = function(api) {
  const env = api.env();
  const PRODUCTION = api.env('production');
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: PRODUCTION ? ['last 2 versions'] : ['last 2 Chrome versions'],
          node: 'current',
        },
        modules: env === 'test' ? 'commonjs' : false,
      },
    ],
    '@babel/preset-typescript',
    '@babel/preset-react',
  ];
  const plugins = [
    '@babel/plugin-syntax-dynamic-import',
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
  ];

  if (!PRODUCTION) {
    plugins.push('react-hot-loader/babel');
  }

  return {
    presets,
    plugins,
  };
};

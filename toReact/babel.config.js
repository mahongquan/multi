module.exports = function(api) {
  api.cache(true);

  return {
    presets: [
      '@babel/preset-flow',
      [
        '@babel/preset-env',
        {
          targets: { electron: '3.0' },
        },
      ],
      '@babel/preset-react',
    ],
    plugins: ['@babel/plugin-proposal-class-properties'],
    overrides: [
      {
        test: ['./src/**/*.ts', './src/**/*.tsx', './test/**/*.ts'],
        presets: [
          '@babel/preset-typescript',
          [
            '@babel/preset-env',
            {
              targets: { electron: '3.0' },
            },
          ],
          '@babel/preset-react',
        ],
      },
    ],
  };
};

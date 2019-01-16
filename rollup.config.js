const browsersync = require('rollup-plugin-browsersync');
const postcss = require('rollup-plugin-postcss');
const postcssNormalize = require('postcss-normalize');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = isProduction === false;

module.exports = {
  input: 'src/scripts/index.js',
  output: {
    file: 'public/giphy.js',
    format: 'iife'
  },
  plugins: [
    (isDevelopment && browsersync({server: 'public'})),
    postcss({
      extract: true,
      plugins: [
      postcssNormalize(),
      autoprefixer(),
      cssnano(),
      ],
      sourceMap: [
        isDevelopment,
      ]
    }),
  ]
};

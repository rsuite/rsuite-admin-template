const { NODE_ENV } = process.env;
const __DEBUG__ = NODE_ENV === 'development';

const plugins = [
  require('autoprefixer')({
    browsers: [
      '> 1%',
      'last 2 versions',
      'ie >= 9'
    ]
  })
];

plugins.push(require('cssnano')({
  preset: ['default', {
    discardComments: {
      removeAll: !__DEBUG__
    }
  }]
}));

module.exports = {
  plugins
};

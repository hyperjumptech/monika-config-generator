const isProd = (process.env.NODE_ENV || 'production') === 'production';

module.exports = {
  basePath: isProd ? '/monika-config-generator' : '/monika-config-generator',
  assetPrefix: isProd ? '/monika-config-generator/' : '/monika-config-generator',
};

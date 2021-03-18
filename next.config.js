const redirect = require('./config/redirects');

module.exports = {
  trailingSlash: true,
  async redirects() {
    return redirect;
  },
};

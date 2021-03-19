const redirect = require('./config/redirects');

module.exports = {
  trailingSlash: true,
  async redirects() {
    return redirect;
  },
  async headers() {
    return [
      {
        source: '/app/:path*/',
        headers: [
          {
            key: 'X-FRAME-Options',
            value: 'DENY',
          },
        ],
      },
    ];
  },
};

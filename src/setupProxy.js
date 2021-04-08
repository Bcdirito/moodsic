const { createProxyMiddleware } = require('http-proxy-middleware');

// This proxy redirects requests to /login endpoints to
// the Express server running on port 8000.
module.exports = function (app) {
  app.use(
    '/login',
    createProxyMiddleware({
      target: 'http://localhost:8000',
      changeOrigin: true
    })
  );
};

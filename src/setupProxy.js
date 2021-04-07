const { createProxyMiddleware } = require('http-proxy-middleware');

// This proxy redirects requests to /login endpoints to
// the Express server running on port 3001.
module.exports = function (app) {
  app.use(
    '/login',
    createProxyMiddleware({
      target: 'http://localhost:8000',
      changeOrigin: true
    })
  );
};

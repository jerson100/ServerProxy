const express = require("express");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
app.use(cors());
app.use(
  createProxyMiddleware({
    router: (req) => new URL(req.path.substring(1)),
    pathRewrite: (path, req) => {
      return path.replace("/", "");
    },
    changeOrigin: true,
    logger: console,
  })
);

app.listen(process.env.PORT || 1554, () => {
  console.info(`proxy server is running on port ${process.env.PORT}`);
});

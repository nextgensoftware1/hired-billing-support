const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

process.env.NODE_ENV = process.env.NODE_ENV || 'production';

const app = next({ dev: false });
const handle = app.getRequestHandler();
const host = process.env.HOST || '0.0.0.0';

const startServer = (port) => {
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  server.on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
      console.warn(`Port ${port} is busy, trying ${port + 1}...`);
      startServer(port + 1);
      return;
    }

    console.error(error);
    process.exit(1);
  });

  server.listen(port, host, () => {
    console.log(`> Ready on http://${host === '0.0.0.0' ? 'localhost' : host}:${port}`);
  });
};

app.prepare().then(() => {
  startServer(Number(process.env.PORT) || 3000);
});
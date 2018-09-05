const fs = require('fs');
const url = require('url');

function renderHTML(route, res) {
  fs.readFile(route, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write("File not found");
    } else {
      res.writeHead(200, {
        'Content-Type': 'text/html',
        'Content-Length': data.length
      });
      res.write(data);
    }
    res.end();
  });
}

function render404(res) {
  res.writeHead(404);
  res.write("Page not found");
  res.end();
}

function onRequest(req, res) {
  const path = url.parse(req.url).pathname;
  console.log(path);

  switch (path) {
    case '/':
      renderHTML('./views/index.html', res);
      break;
    case '/about':
      renderHTML('./views/about.html', res);
      break;
    case '/public/css/reset.css':
      fs.readFile('./public/css/reset.css', (err, data) => {
        if (err) {
          res.writeHead(404);
          res.write("File not found");
        } else {
          res.writeHead(200, {
            'Content-Type': 'text/css',
            'Content-Length': data.length
          });
          res.write(data);
        }
        res.end();
      });
      // renderHTML('./public/css/reset.css', res);
      break;
    case '/public/css/style.css':
      fs.readFile('./public/css/style.css', (err, data) => {
        if (err) {
          res.writeHead(404);
          res.write("File not found");
        } else {
          res.writeHead(200, {
            'Content-Type': 'text/css',
            'Content-Length': data.length
          });
          res.write(data);
        }
        res.end();
      });
      // renderHTML('./public/css/style.css', res);
      break;
    case '/images/tplogo2014.png':
      renderHTML('./public/images/tplogo2014.png', res);
      break;
    case '/images/css-icon.png':
      renderHTML('./public/images/css-icon.png', res);
      break;
    case '/images/url-icon.png':
      renderHTML('./public/images/url-icon.png', res);
      break;
    case '/images/html-icon.png':
      renderHTML('./public/images/html-icon.png', res);
      break;
    default:
      render404(res);
      break;
  }
}

module.exports = {
  onRequest: onRequest
};
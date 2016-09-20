const express = require('express');
const fs = require('fs');
const http = require('http');
const JTS = require('jts');
const markdown = require('marked');
const path = require('path');

var router = express(),
    server = new http.Server(router);

var template = new JTS({
  cache: false,
  defaultLayout: path.resolve(__dirname, 'layout.jts')
});

router.get('/', (req, res) => {
  var file = template.read(path.resolve(__dirname, '../README.md'));
  res.send(template.compile(markdown(file), res.locals));
});

router.use(express.static(path.resolve(__dirname)));
router.use('/dist', express.static(path.resolve(__dirname, '../dist')));
router.use('/lib', express.static(path.resolve(__dirname, '../node_modules')));

// Example HTML is rendered above documentation from Markdown.
router.use((req, res, next) => {
  var exampleTemplate = path.resolve(__dirname, 'example/' + req.originalUrl.replace(/\/$/, '.html'));
  fs.access(exampleTemplate, fs.R_OK, err => {
    if (err) return next();

    res.locals.demo = template.read(exampleTemplate);
    next();
  });
});

// Documentation will be rendered if it exists from the original Markdown source.
router.use((req, res, next) => {
  if (req.originalUrl.indexOf('components') < 0) return next();

  if (req.originalUrl.indexOf('.md') < 0) req.originalUrl += '/README.md';
  fs.access(path.resolve(__dirname, '../src/' + req.originalUrl), fs.R_OK, err => {
    if (err) return next();

    var file = template.read(path.resolve(__dirname, '../src/' + req.originalUrl));
    res.send(template.compile(markdown(file), res.locals));
  });
});

router.use((req, res, next) => {
  if (!res.locals.demo) return next();
  res.send(template.compile('', res.locals));
});

server.listen(process.env.PORT || 1776, () => {
  process.stdout.write('Demo app running at localhost:' + server.address().port + '.\n');
  server.address();
});

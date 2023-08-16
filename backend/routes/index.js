var express = require('express');
var router = express.Router();
var fs = require('fs').promises;

var content = [];
router.post('/dir', function(req, res) {
  var dir = req?.body?.dir;
  fs.readdir(dir).then(list => {
    list.map((post, i) => {
      var sub = {};
      fs.readFile(dir+post, "utf-8").then((c) => {
        c.split("/*config*/")[0]
          .split(/\n+/)
          .map(cf => cf.split(":"))
          .filter(cf => cf != "")
          .map(c => sub[c[0]] = c[1]);
        });
        content[i] = sub;
    });
  });
  res.json(content);
});

router.get('/post', function(req, res, next) {
  content = 'index content received from node server';

  if(!content) {
    res.status(400).json({error: 'content is empty'});
  } else {
    res.json({content: content});
  }
});

module.exports = router;

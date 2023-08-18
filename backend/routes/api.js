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
        sub['fileName'] = post.substring(0,9);
        content[i] = sub;
    });
  });
  console.log(content);
  res.json(content);
});

module.exports = router;

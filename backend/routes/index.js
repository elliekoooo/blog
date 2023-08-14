var express = require('express');
var router = express.Router();
var fs = require('fs');

router.post('/dir', function(req, res) {
  //console.log(req, res);

  var posts = fs.readdirSync("../frontend/src/assets/post/2023/08");

  fs.readFile("../frontend/src/assets/post/2023/08/"+posts[0], "utf-8", (err, data) => {
    console.log("===test====")
    console.log(err, data);
  });
  res.json("");
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

var express = require('express');
var fetch = require('node-fetch');

var router = express.Router();

router.get('/ai', async (req, res, next) => {
  var url = req.query.type
  const ress = await fetch(`https://aemt.me/openai?text=${url}`)
  const result = ress
  res.json({
    result
  })
});

module.exports = router
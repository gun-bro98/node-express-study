const express = require('express');
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render('prac', {data: "안녕"})
})

module.exports = router;
var express = require('express');
var api = require('./../controller/api/index');
const router = express.Router();

router.get('/getList', api.getList);  // 注册

module.exports = router;

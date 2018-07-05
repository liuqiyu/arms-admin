import express from 'express';
import api from './../controller/api/index';
const router = express.Router();

router.get('/navList', api.getNavList);
router.get('/dataList', api.getArmsList);

module.exports = router;

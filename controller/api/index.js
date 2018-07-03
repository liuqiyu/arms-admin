var db = require('./../../utils/dbCommon');

const getList = (req, res, next) => {
// 查找用户
  var selectSql = "select * from arms";
  db.query(selectSql, async (err, rows, fields) => {
    if (err) {
      return console.error(err);
    }
    console.log(123);
    if (rows.length > 0) {
      res.send({
        code: 200,
        status: 'success',
        message: '123！',
        data: rows,
      });
    }
  });
}

module.exports = {
  getList,
};
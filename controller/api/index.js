import db from './../../utils/dbCommon';

/**
 * 获取导航数据
 * @param req
 * @param res
 * @param next
 */
const getNavList = (req, res, next) => {
  const selectSql = "select a.id, a.name, a.img_src, t.id type_id, t.name type_name, a.descript, a.remarks from arms as a join arms_type as t on t.id = a.type_id";
  db.query(selectSql, async (err, rows, fields) => {
    if (err) {
      return console.error(err);
    }
    const typeIdArr = [];
    rows.forEach((value) => {
      typeIdArr.push(value.type_id);
    });
    const arr = [...new Set(typeIdArr)];
    const newArr = [];
    rows.forEach((value) => {
      arr.forEach((item, index) => {
        if (item === value.type_id) {
          if (!newArr[index]) {
            newArr[index] = {
              value: item,
              label: value.type_name,
              children: [
                {
                  value: value.id,
                  label: value.name,
                  type_id: value.type_id,
                }
              ],
            }
          } else {
            newArr[index].children.push({
              value: value.id,
              label: value.name,
              type_id: value.type_id,
            });
          }
        }
      });
    });
    if (rows.length > 0) {
      res.send({
        code: 200,
        status: 'success',
        message: '操作成功！',
        data: newArr,
      });
    }
  });
}

/**
 * 获取列表
 * @param req
 * @param res
 * @param next
 */
const getArmsList = (req, res, next) => {
  const selectSql = "select a.id, a.name, a.img_src, t.id type_id, t.name type_name, a.descript, a.remarks from arms as a join arms_type as t on t.id = a.type_id";
  db.query(selectSql, async (err, rows, fields) => {
    if (err) {
      return console.error(err);
    }
    if (rows.length > 0) {
      res.send({
        code: 200,
        status: 'success',
        message: '操作成功！',
        data: rows,
      });
    }
  });
}

export default {
  getNavList,
  getArmsList,
};
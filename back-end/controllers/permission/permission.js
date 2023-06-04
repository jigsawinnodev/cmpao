const { mysqlConnection } = require('../../Config/DB')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const moment = require('moment');
moment.locale()
const UpdatePermission = (req, res) => {
    // console.log(req.body);
    const { per_user, per_menu } = req.body;
    let sql = `SELECT * FROM permission WHERE per_user = '${per_user}' AND per_menu = '${per_menu}'`;
    mysqlConnection.query(sql, function (err, result) {
        if (!err) {
            if (result.length <= 0) {
                let sql = `INSERT INTO permission(per_user, per_menu) VALUES ('${per_user}', '${per_menu}')`;
                mysqlConnection.query(sql, function (err, result) {
                    if (!err) {
                        res.json('Insert Success')
                    };
                    if (err) console.log(err);
                })
            }
            if (result.length > 0) {
                if (result[0].is_active == 0) {
                    let sql = `UPDATE permission SET is_active = 1 , updated_at ='${moment().format('YYYY-MM-DD HH:MM:S')}' WHERE per_id = ${result[0].per_id}`;
                    mysqlConnection.query(sql, function (err, result) {
                        if (!err) {
                            res.json('Update Success')
                        };
                        if (err) console.log(err);
                    })
                } else {
                    let sql = `UPDATE permission SET is_active = 0 , updated_at ='${moment().format('YYYY-MM-DD HH:MM:S')}' WHERE per_id = ${result[0].per_id}`;
                    mysqlConnection.query(sql, function (err, result) {
                        if (!err) {
                            res.json('Delete Success')
                        };
                        if (err) console.log(err);
                    })
                }
            }
        };
        if (err) console.log(err);
    })
}


module.exports = {
    UpdatePermission
}
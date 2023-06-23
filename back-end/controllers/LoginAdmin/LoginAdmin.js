const { mysqlConnection } = require('../../Config/DB')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const moment = require('moment');
// moment.locale()
require('dotenv').config();

const AdminLogin = (req, res) => {
    const { user_username, user_password } = req.body
    let sql = `SELECT * FROM user WHERE user_username = '${user_username}'`;
    mysqlConnection.query(sql, async function (err, result) {
        if (!err) {
            if (result.length > 0) {
                const ComparePassword = await bcrypt.compare(user_password, result[0].user_password);
                // console.log(ComparePassword);
                if (ComparePassword) {
                    const time = moment().add(543, 'year').format('YYYY-MM-DD HH:mm:ss')
                    // console.log(result[0].user_id);
                    let sql_UpdateTime = `UPDATE user SET login_time ='${time}' WHERE user_id = ${result[0].user_id}`;
                    mysqlConnection.query(sql_UpdateTime, function (err, result1) {
                        if (!err) {
                        };
                        if (err) console.log(err);
                    })
                    const token = jwt.sign(
                        { id: result[0].user_id },
                        process.env.TOKEN_KEY,
                        {
                            algorithm: "HS256",
                            expiresIn: "2d"
                        }
                    )
                    return res.json({
                        status: "success",
                        token: token,
                    })
                } else {
                    return res.json({
                        status: "false",
                    })
                }
            } else {
                return res.json({
                    status: "false",
                })
            }
        };
        if (err) console.log(err);
    })
}

const VertifyTokenAdmin = (req, res) => {
    const { id } = req.user;
    console.log(id);
    let sql = `SELECT user_id, user_idcard, user_prename, user_firstname, user_lastname, user_username, user_email, user_phone, user_img, user_active, user_position, user_birthday, user_permission, login_time, user_status FROM user WHERE user_id = ${id}`;
    mysqlConnection.query(sql, function (err, result) {
        if (!err) {
            res.json(result)
        };
        if (err) console.log(err);
    })
}


module.exports = {
    AdminLogin,
    VertifyTokenAdmin
}
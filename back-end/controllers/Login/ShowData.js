
const { mysqlConnection } = require('../../Config/DB')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const Show_personNotSuccess = (req, res) => {
    let sql = `SELECT COUNT(created_date) as person FROM job_application WHERE job_application.app_status = 0 GROUP BY job_application.app_id`;
    mysqlConnection.query(sql, function (err, result) {
        if (!err) {
            res.json(result)
        };
        if (err) console.log(err);
    })
}

const Show_personAll = (req, res) => {
    let sql = `SELECT COUNT(app_id) as person FROM job_application`;
    mysqlConnection.query(sql, function (err, result) {
        if (!err) {
            res.json(result)
        };
        if (err) console.log(err);
    })
}

const Show_personNotPayment = (req, res) => {
    let sql = `SELECT COUNT(app_id) as person_NotPay FROM job_application WHERE payment_status = 0`;
    mysqlConnection.query(sql, function (err, result) {
        if (!err) {
            res.json(result)
        };
        if (err) console.log(err);
    })
}

const authLogin = (req, res) => {
    // console.log(req.body);
    const { username, password } = req.body;
    // console.log(username, password);
    let sql = `SELECT * FROM member WHERE m_username = '${username}'`
    mysqlConnection.query(sql, async function (err, result) {
        if (!err) {
            // console.log(result[0].m_password);
            const checkPassword = await bcrypt.compare(password, result[0].m_password);
            // console.log(checkPassword);
            if (checkPassword) {
                // console.log(process.env.TOKEN_KEY);
                const token = jwt.sign(
                    { email: username },
                    process.env.TOKEN_KEY,
                    {
                        algorithm: "HS256",
                        expiresIn: "2d"
                    }
                )
                return res.json({
                    token: token
                })
            }
        };
        if (err) console.log(err);
    })
}







module.exports = {
    Show_personNotSuccess,
    Show_personAll,
    Show_personNotPayment,
    authLogin
}
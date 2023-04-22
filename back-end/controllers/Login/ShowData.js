
const { mysqlConnection } = require('../../Config/DB')


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







module.exports = {
    Show_personNotSuccess,
    Show_personAll,
    Show_personNotPayment
}
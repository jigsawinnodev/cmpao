
const { mysqlConnection } = require('../../Config/DB')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const moment = require('moment');
moment.locale()
// const moment = require('moment/min/moment-with-locale');
// import moment from "moment/min/moment-with-locales";
// const "moment/locale/th";
moment.locale("th");
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
            // console.log(result);

            if (result.length > 0) {
                const checkPassword = await bcrypt.compare(password, result[0].m_password);
                // console.log(checkPassword);
                if (checkPassword) {
                    // console.log(moment().locale('th').add(543, 'year').format());

                    const time = moment().format('YYYY-MM-DD hh:mm:ss')
                    let sql_UpdateTime = `UPDATE member SET login_time = '${time}' WHERE m_id = ${result[0].m_id}`;
                    mysqlConnection.query(sql_UpdateTime, function (err, result1) {
                        if (!err) {

                        };
                        if (err) console.log(err);
                    })
                    const token = jwt.sign(
                        { username: username },
                        process.env.TOKEN_KEY,
                        {
                            algorithm: "HS256",
                            expiresIn: "2d"
                        }
                    )
                    const { is_accept } = result[0];
                    return res.json({
                        status: "success",
                        token: token,
                        is_accept: is_accept
                    })
                } else {
                    return res.json({
                        status: "not_success"
                    })
                }
            } else {
                return res.json({
                    status: "not_success"
                })
            }
        };
        if (err) console.log(err);
    })
}


const ShowDetailDataUser = (req, res) => {
    let sqlGetMaxID = `SELECT
                job_calendar.*
                FROM job_calendar
                WHERE job_calendar.jc_id = (select max(job_calendar.jc_id) from job_calendar)`;
    mysqlConnection.query(sqlGetMaxID, function (err, result) {
        if (!err) {
            let sql = `SELECT
                        job_calendar.*,
                        type_position.name,
                        (
                        SELECT
                            COUNT(*)
                        FROM
                            job_application
                        WHERE
                            job_application.jc_id = ${result[0].jc_id}
                    ) AS count_applicant_all,
                    (
                        SELECT
                            COUNT(*)
                        FROM
                            job_application
                        WHERE
                            job_application.jc_id =  ${result[0].jc_id} AND job_application.app_status = 1 AND job_application.payment_status = 1
                    ) AS count_person_pay,
                    (
                        SELECT
                            COUNT(*)
                        FROM
                            job_application
                        WHERE
                            job_application.jc_id =  ${result[0].jc_id} AND job_application.app_status = 1 AND job_application.payment_status != 1
                    ) AS count_person_pay_no,
                    (
                        SELECT
                            COUNT(*)
                        FROM
                            job_application
                        WHERE
                            job_application.jc_id =  ${result[0].jc_id} AND job_application.app_status = 1
                    ) AS count_success,
                    (
                        SELECT
                            COUNT(*)
                        FROM
                            job_application
                        WHERE
                            job_application.jc_id =  ${result[0].jc_id} AND job_application.app_status = 0
                    ) AS count_wait,
                    (
                        SELECT
                            COUNT(*)
                        FROM
                            job_application
                        WHERE
                            job_application.jc_id =  ${result[0].jc_id} AND job_application.app_status = 2
                    ) AS count_warm,
                    (
                        SELECT
                            COUNT(*)
                        FROM
                            job_application
                        WHERE
                            job_application.jc_id =  ${result[0].jc_id} AND job_application.app_status IN(3, 99)
                    ) AS count_cancel
                    FROM
                        job_calendar
                    JOIN type_position ON type_position.id = job_calendar.jc_type
                    WHERE
                        jc_id = ${result[0].jc_id} AND job_calendar.status = 1`;
            mysqlConnection.query(sql, function (err, result) {
                if (!err) {
                    res.json(result[0])
                };
                if (err) console.log(err);
            })


        };
        if (err) console.log(err);
    })
}

const ShowDetailPositions = (req, res) => {
    let sql = `SELECT job_calendar.*, type_position.name as position_name, (select sum(job_amount) from jobs inner join position on jobs.job_position = position.p_id where jobs.jc_id = job_calendar.jc_id ) as count_position, (select count(*) from job_application join jobs on jobs.job_id = job_application.job_id where job_calendar.jc_id = jobs.jc_id) as count_apply FROM job_calendar JOIN type_position ON type_position.id = job_calendar.jc_type ORDER BY job_calendar.jc_id DESC`;
    mysqlConnection.query(sql, function (err, result) {
        if (!err) {
            // log
            res.json(result)
        };
        if (err) console.log(err);
    })
}








module.exports = {
    Show_personNotSuccess,
    Show_personAll,
    Show_personNotPayment,
    authLogin,
    ShowDetailDataUser,
    ShowDetailPositions
}

const { mysqlConnection } = require('../../Config/DB')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const moment = require('moment');

const GetAllPayment = (req, res) => {
    let sql = `SELECT job_calendar.*, type_position.name as position_name, (select sum(job_amount) from jobs inner join  position on jobs.job_position = position.p_id where jobs.jc_id = job_calendar.jc_id ) as count_position, (select count(app_id) from job_application  join jobs on  jobs.job_id = job_application.job_id
    where jobs.jc_id = job_calendar.jc_id and job_application.app_status = 1 and job_application.payment_status = 0)  as count_apply
    FROM job_calendar
    JOIN type_position ON type_position.id = job_calendar.jc_type
    WHERE job_calendar.status = 1
    ORDER BY job_calendar.jc_id DESC`;
    mysqlConnection.query(sql, function (err, result) {
        if (!err) {
            res.json(result);
        };
        if (err) console.log(err);
    })
}

const GetPayMentCheckByid = (req, res) => {
    const { id } = req.params;
    let sql = `SELECT
                    job_calendar.*,
                    type_position.name,
                    (
                    SELECT
                        COUNT(*)
                    FROM
                        job_application
                    WHERE
                        job_application.jc_id = ${id} AND job_application.app_status = 1
                ) AS count_applicant_all,
                (
                    SELECT
                        COUNT(*)
                    FROM
                        job_application
                    WHERE
                        job_application.jc_id = ${id} AND job_application.app_status = 1 AND job_application.payment_status = 1
                ) AS count_person_pay,
                (
                    SELECT
                        COUNT(*)
                    FROM
                        job_application
                    WHERE
                        job_application.jc_id = ${id} AND job_application.app_status = 1 AND job_application.payment_status != 1
                ) AS count_person_pay_no
                FROM
                    job_calendar
                JOIN type_position ON type_position.id = job_calendar.jc_type
                WHERE
                    jc_id = ${id}`;
    mysqlConnection.query(sql, function (err, result) {
        if (!err) {
            res.json(result);
        };
        if (err) console.log(err);
    })
}

const GetPositionToexport = (req, res) => {
    const { id } = req.params;
    let sql = `SELECT * FROM jobs 
                JOIN position ON jobs.job_id = position.p_id
                WHERE jobs.jc_id = ${id}
                GROUP BY position.p_id
                ORDER BY position.p_id ASC`;
    mysqlConnection.query(sql, function (err, result) {
        if (!err) {
            res.json(result);
        };
        if (err) console.log(err);
    })
}
module.exports = {
    GetAllPayment,
    GetPayMentCheckByid,
    GetPositionToexport
}
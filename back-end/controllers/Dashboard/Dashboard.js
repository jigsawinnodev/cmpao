const { mysqlConnection } = require('../../Config/DB')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const moment = require('moment');
moment.locale()

const GetMaxID = (req, res) => {
    let sql = `SELECT MAX(jc_id) as id FROM job_calendar`;
    mysqlConnection.query(sql, function (err, result) {
        if (!err) {
            let id = result[0].id;
            let sql = `
                SELECT
                job_calendar.*,
                type_position.name,
                (
                SELECT
                    SUM(job_amount)
                FROM
                    jobs
                INNER JOIN POSITION ON jobs.job_position = POSITION.p_id
                WHERE
                    jobs.jc_id = job_calendar.jc_id
            ) AS count_position,
            (
                SELECT
                    COUNT(*)
                FROM
                    job_application
                WHERE
                    job_application.jc_id = ${id}
            ) AS count_applicant_all,
            (
                SELECT
                    COUNT(*)
                FROM
                    job_application
                WHERE
                    job_application.jc_id = ${id} AND job_application.app_status NOT IN(3, 99)
            ) AS count_applicant_all_dash,
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
            ) AS count_person_pay_no,
            (
                SELECT
                    COUNT(*)
                FROM
                    job_application
                WHERE
                    job_application.jc_id = ${id} AND job_application.app_status = 1
            ) AS count_success,
            (
                SELECT
                    COUNT(*)
                FROM
                    job_application
                WHERE
                    job_application.jc_id = ${id} AND job_application.app_status = 0
            ) AS count_wait,
            (
                SELECT
                    COUNT(*)
                FROM
                    job_application
                WHERE
                    job_application.jc_id = ${id} AND job_application.app_status = 2
            ) AS count_warm,
            (
                SELECT
                    COUNT(*)
                FROM
                    job_application
                WHERE
                    job_application.jc_id = ${id} AND job_application.app_status IN(3, 99)
            ) AS count_cancel
            FROM
                job_calendar
            JOIN type_position ON type_position.id = job_calendar.jc_type
            WHERE
                jc_id = ${id}`;
            mysqlConnection.query(sql, function (err, result) {
                if (!err) {
                    res.json(result[0])
                };
                if (err) console.log(err);

            })
        }
    })
}

module.exports = {
    GetMaxID
}
const { mysqlConnection } = require('../../Config/DB')
var baseURL_IMG = 'http://localhost:9500/public/img/'
var baseURL_PDF = 'http://localhost:9500/public/pdf/'


const GetjobForUserRegister = (req, res) => {
    let sql = `SELECT
                job_calendar.*,
                type_position.name AS position_name,
                (
                SELECT
                    SUM(job_amount)
                FROM
                    jobs
                WHERE
                    jobs.jc_id = job_calendar.jc_id
            ) AS count_position,
            (
                SELECT
                    COUNT(app_id)
                FROM
                    job_application
                JOIN jobs ON jobs.job_id = job_application.job_id
                WHERE
                    jobs.jc_id = job_calendar.jc_id
            ) AS count_apply,
            (
                SELECT
                    COUNT(jobs.jc_id)
                FROM
                    jobs
                WHERE
                    jobs.jc_id = job_calendar.jc_id
            ) AS sum_position
            FROM
                job_calendar
            JOIN type_position ON type_position.id = job_calendar.jc_type
            WHERE
                DATE_FORMAT(NOW(), '%Y-%m-%d') <= DATE_FORMAT(jc_start, '%Y-%m-%d') OR DATE_FORMAT(NOW(), '%Y-%m-%d') <= DATE_FORMAT(jc_end, '%Y-%m-%d')
            ORDER BY
                job_calendar.jc_id
            DESC
            LIMIT 8`;
    mysqlConnection.query(sql, function (err, result) {
        if (!err) {
            res.json(result)
        };
        if (err) {
            res.json({
                status: 'no_success'
            })
        };
    })
}

const GetpositionInJob = (req, res) => {
    const { id } = req.params;
    let sql = `SELECT
                job_id,
                job_position,
                job_amount,
                job_file,
                p_name
            FROM
                jobs
            JOIN position ON position.p_id = jobs.job_position
            WHERE
                jc_id = ${id}`;
    mysqlConnection.query(sql, function (err, result) {
        if (!err) {
            res.json(result)
        };
        if (err) {
            res.json({
                status: 'no_success'
            })
        };
    })
}

const GetJobFile = (req, res) => {
    const { id } = req.params;
    const sql = `SELECT * FROM jobs WHERE job_id = ${id}`;
    mysqlConnection.query(sql, function (err, result) {
        if (!err) {
            console.log(result);
            // result[0].job_file = `${baseURL_PDF}${result[0].job_file}`
            // res.json(result);
        };
        if (err) {
            res.json({
                status: 'no_success'
            })
        };
    })
}

const GetdetailJob = (req, res) => {
    const { id } = req.params;
    console.log(id);
    let sql = `SELECT * FROM position LEFT JOIN type_position ON position.p_type = type_position.id WHERE p_id = '${id}' ORDER BY p_id ASC`;
    mysqlConnection.query(sql, function (err, result) {
        if (!err) {
            console.log(result);
            res.json(result);
        };
        if (err) {
            res.json({
                status: 'no_success'
            })
        };
    })
}
const GetWorkposotionByid = (req, res) => {
    const { id } = req.params;
    let sql = `SELECT
                    job_id,
                    job_position,
                    job_amount,
                    job_file,
                    p_name,
                    is_download
                FROM
                    jobs
                JOIN POSITION ON POSITION.p_id = jobs.job_position
                WHERE
                    job_id = ${id}`;
    mysqlConnection.query(sql, function (err, result) {
        if (!err) {
            // console.log(result);
            res.json(result);
        };
        if (err) {
            res.json({
                status: 'no_success'
            })
        };
    })
}

module.exports = {
    GetjobForUserRegister,
    GetpositionInJob,
    GetJobFile,
    GetdetailJob,
    GetWorkposotionByid
}




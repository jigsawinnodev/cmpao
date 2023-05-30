
const { mysqlConnection } = require('../../Config/DB')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const moment = require('moment');
moment.locale()

const GetAll_Apply = (req, res) => {
    let sql = `SELECT job_calendar.*, type_position.name AS position_name, ( SELECT SUM(job_amount) FROM jobs INNER JOIN POSITION ON jobs.job_position = POSITION.p_id WHERE jobs.jc_id = job_calendar.jc_id ) AS count_position, ( SELECT COUNT(*) FROM job_application JOIN jobs ON jobs.job_id = job_application.job_id WHERE job_calendar.jc_id = jobs.jc_id ) AS count_apply FROM job_calendar JOIN type_position ON type_position.id = job_calendar.jc_type WHERE job_calendar.status = 1 ORDER BY job_calendar.jc_id DESC;`;
    mysqlConnection.query(sql, function (err, result) {
        if (!err) {
            res.json(result)
            console.log(result);
        };
        if (err) console.log(err);
    })
}
module.exports = {
    GetAll_Apply
}

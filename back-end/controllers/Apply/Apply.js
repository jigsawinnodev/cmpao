
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
const ManageInsertAndEdit = (req, res) => {
    console.log(req.body);
    const { jc_type, jc_start, jc_end, job_position, job_amount, job_payment, job_no, job_detail_payment, job_id, jc_id, type_file, tree, file, type_file_id, tree_id } = req.body;
    const Date_jc_start = moment(jc_start).add('543', 'y').format('YYYY-MM-DD');
    const Date_jc_end = moment(jc_end).add('543', 'y').format('YYYY-MM-DD');
    var lastID_job_calendar = 0;
    var lastID_Jobs = null;
    const { filename } = req.file
    if (!jc_id) {
        let sql = `INSERT INTO job_calendar(jc_type,jc_start, jc_end, create_at) VALUES (${jc_type},'${Date_jc_start}','${Date_jc_end}','${moment().format('YYYY-MM-DD hh:mm:ss')}')`;
        mysqlConnection.query(sql, function (err, result) {
            if (!err) {
                lastID_job_calendar = result.insertId;
                if (!job_id) {
                    let sql_Job = `INSERT INTO jobs(job_position,job_amount,job_file,jc_id,job_payment,job_no, create_at, job_detail_payment) VALUES (${job_position},'${job_amount}','${filename}',${lastID_job_calendar},${job_payment},'${job_no}','${moment().format('YYYY-MM-DD HH:mm:s')}','${job_detail_payment}')`;
                    mysqlConnection.query(sql_Job, function (err, result) {
                        if (!err) {
                            lastID_Jobs = result.insertId;
                            for (let index = 0; index < type_file.length; index++) {
                                let sqlTypeFile = `INSERT INTO job_file( job_id, jobf_type, create_at) VALUES (
                                    ${lastID_Jobs},${type_file[index]},'${moment().format('YYYY-MM-DD HH:mm:s')}')`;
                                mysqlConnection.query(sqlTypeFile, function (err, result) {
                                    if (!err) {
                                    };
                                    if (err) console.log(err);
                                })
                            }
                            for (let index = 0; index < tree.length; index++) {
                                let sqlTree = `INSERT INTO job_org(org_id, job_id, create_at) VALUES (${tree[index]},${lastID_Jobs},'${moment().format('YYYY-MM-DD HH:mm:s')}')`
                                mysqlConnection.query(sqlTree, function (err, result) {
                                    if (!err) {
                                        // console.log("insert");
                                    };
                                    if (err) console.log(err);
                                })
                            }
                        };
                        if (err) console.log(err);
                        res.json({
                            status: 'success',
                            id: lastID_job_calendar
                        });
                    })
                }
            };
            if (err) console.log(err);
        })
    } else {
    }

}

const Delete_Apply = (req, res) => {
    const { id } = req.params;
    let sql = `UPDATE job_calendar SET status = 0 WHERE jc_id = ${id}`;
    mysqlConnection.query(sql, function (err, result) {
        if (!err) {
            res.json('success');
        };
        if (err) console.log(err);
    })
}
const Get_ApplyByID = (req, res) => {
    const { id } = req.params;
    let sql = `SELECT * FROM job_calendar WHERE jc_id = ${id}`;
    mysqlConnection.query(sql, function (err, result) {
        if (!err) {
            res.json(result);
        };
        if (err) console.log(err);
    })
}
const Get_ApplyByIDtoTable = (req, res) => {
    const { id } = req.params;
    let sql = `SELECT job_id, job_position, job_no, job_amount, job_payment, job_detail_payment, job_file, p_name FROM jobs JOIN position ON position.p_id = jobs.job_position WHERE jc_id = ${id} AND is_active = 1`;
    mysqlConnection.query(sql, function (err, result) {
        if (!err) {
            res.json(result);
        };
        if (err) console.log(err);
    })
}
const Delete_positionApply = (req, res) => {
    const { id } = req.params;
    let sql = `UPDATE jobs SET is_active = 0 WHERE job_id = ${id}`;
    mysqlConnection.query(sql, function (err, result) {
        if (!err) {
            res.json("success");
        };
        if (err) console.log(err);
    })
}
const GetDetailPositionById = (req, res) => {
    const { id } = req.params;
    let sql = `SELECT * FROM jobs WHERE jobs.job_id =${id}`;
    mysqlConnection.query(sql, function (err, result) {
        if (!err) {
            res.json(result);
        };
        if (err) console.log(err);
    })
}
const GetDetailFilePositionByID = (req, res) => {
    const { id } = req.params;
    let sql = `SELECT * FROM job_file WHERE job_id = ${id}`;
    mysqlConnection.query(sql, function (err, result) {
        if (!err) {
            res.json(result);
        };
        if (err) console.log(err);
    })
}
const GetOrganizationByID = (req, res) => {
    const { id } = req.params;
    let sql = `SELECT * FROM job_org WHERE job_id = ${id}`;
    mysqlConnection.query(sql, function (err, result) {
        if (!err) {
            // console.log(result);
            // let Checktree = {}
            // let dataCheck = [];
            // for (let index = 0; index < result.length; index++) {
            //     Checktree[result[index].org_id] = {
            //         org_id: result[index].org_id
            //     }
            // }
            res.json(result);
        };
        if (err) console.log(err);
    })
}


module.exports = {
    GetAll_Apply,
    ManageInsertAndEdit,
    Delete_Apply,
    Get_ApplyByID,
    Get_ApplyByIDtoTable,
    Delete_positionApply,
    GetDetailPositionById,
    GetDetailFilePositionByID,
    GetOrganizationByID,

}

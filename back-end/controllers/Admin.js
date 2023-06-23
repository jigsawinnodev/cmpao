const { mysqlConnection } = require('../Config/DB')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const moment = require('moment');
var baseURL_IMG = 'http://localhost:9500/public/img/'
var baseURL_PDF = 'http://localhost:9500/public/pdf/'

const GetMenuAdmin = (req, res) => {
    let sql = "SELECT * FROM admin_menu";
    mysqlConnection.query(sql, function (err, result) {
        res.json(result)
    })
}


const GetpreName = (req, res) => {
    let sql = 'SELECT * FROM prename';
    mysqlConnection.query(sql, function (err, result) {
        if (!err) res.json(result)
        if (err) {
            console.log(err);
        }
    })
}
const BloodType = (req, res) => {
    let sql = 'SELECT * FROM blood';
    mysqlConnection.query(sql, function (err, result) {
        if (!err) res.json(result);
        if (err) console.log(err);
    })
}
const Status_relationship = (req, res) => {
    let sql = 'SELECT * FROM status_relationship';
    mysqlConnection.query(sql, function (err, result) {
        if (!err) res.json(result);
        if (err) console.log(err);
    })
}
const GetTbl_country = (req, res) => {
    let sql = 'SELECT * FROM th_province';
    mysqlConnection.query(sql, function (err, result) {
        if (!err) res.json(result);
        if (err) console.log(err);
    })
}

const GetTbl_district = (req, res) => {
    let sql = 'SELECT * FROM th_district';
    mysqlConnection.query(sql, function (err, result) {
        if (!err) res.json(result);
        if (err) console.log(err);
    })
}
const GetTbl_subdistrict = (req, res) => {
    let sql = 'SELECT * FROM th_subdistrict';
    mysqlConnection.query(sql, function (err, result) {
        if (!err) res.json(result);
        if (err) console.log(err);
    })
}

const GetTbl_religion = (req, res) => {
    let sql = 'SELECT * FROM religion';
    mysqlConnection.query(sql, function (err, result) {
        if (!err) res.json(result);
        if (err) console.log(err);
    })
}


const DeleteManagePosition = (req, res) => {
    console.log(req.body);
}


// GetAll position




// end_positions


const GetApplyAll = (req, res) => {
    let sql = "SELECT job_calendar.*, type_position.name AS position_name, ( SELECT SUM(job_amount) FROM jobs INNER JOIN POSITION ON jobs.job_position = POSITION.p_id WHERE jobs.jc_id = job_calendar.jc_id ) AS count_position, ( SELECT COUNT(*) FROM job_application JOIN jobs ON jobs.job_id = job_application.job_id WHERE job_calendar.jc_id = jobs.jc_id ) AS count_apply FROM job_calendar JOIN type_position ON type_position.id = job_calendar.jc_type WHERE job_calendar.status = 1 ORDER BY job_calendar.jc_id DESC";
    mysqlConnection.query(sql, function (err, result) {
        if (!err) res.json(result);
        if (err) console.log(err);
    })
}

const Apply_Applycheck = (req, res) => {
    var { id } = req.body;
    let sql = `
    SELECT job_calendar.*, type_position.name,
                    (SELECT COUNT(*)
    FROM job_application
    WHERE job_application.jc_id = ${id}) AS count_applicant_all,
                    (SELECT COUNT(*)
    FROM job_application
    WHERE job_application.jc_id = ${id} AND job_application.app_status = 1 AND job_application.payment_status = 1) AS count_person_pay,
                    (SELECT COUNT(*)
    FROM job_application
    WHERE job_application.jc_id = ${id} AND job_application.app_status = 1 AND job_application.payment_status != 1) AS count_person_pay_no,
                    (SELECT COUNT(*)
    FROM job_application
    WHERE job_application.jc_id = ${id} AND job_application.app_status = 1) AS count_success,
                    (SELECT COUNT(*)
    FROM job_application
    WHERE job_application.jc_id = ${id} AND job_application.app_status = 0) AS count_wait,
                    (SELECT COUNT(*)
    FROM job_application
    WHERE job_application.jc_id = ${id} AND job_application.app_status = 2) AS count_warm,
                    (SELECT COUNT(*)
    FROM job_application
    WHERE job_application.jc_id = ${id} AND job_application.app_status IN(3, 99)) AS count_cancel
    FROM job_calendar
    JOIN type_position ON type_position.id = job_calendar.jc_type
    WHERE jc_id = ${id} `;
    mysqlConnection.query(sql, function (err, result) {
        if (!err) res.json(result);
        if (err) console.log(err);
    })
}




// permission
const PermissionsGetAll = (req, res) => {
    let sql = "SELECT * FROM user_permission ORDER BY permiss_id ASC";
    mysqlConnection.query(sql, function (err, result) {
        if (!err) res.json(result);
        if (err) console.log(err);
    })
}
const GetCheckPermissionsAll = (req, res) => {
    let sql = "SELECT * FROM permission WHERE is_active = 1  ORDER BY per_id ASC";
    mysqlConnection.query(sql, function (err, result) {
        if (!err) {
            const data = [];
            result.forEach((value, i) => {
                if (!data[value.per_user]) {
                    data[value.per_user] = [];
                }
                data[value.per_user][value.per_menu] = 1;
            });
            res.json(data);
        };
        if (err) console.log(err);
    })
}

const Insert_Apply = (req, res) => {
    const { jc_type, jc_start, jc_end, create_at, jc_id, update_at } = req.body
    const { job_position, job_amount, job_payment, job_no } = req.body;

    if (!jc_id) {
        let sql = `INSERT INTO job_calendar(jc_type, jc_start, jc_end, create_at) VALUES
                    (${jc_type}, '${jc_start}', '${jc_end}', '${create_at}')`;
        mysqlConnection.query(sql, function (err, result) {
            if (!err) {
                if (!req.fileValidationError) {
                    if (!req.file) {
                        let sql = `INSERT INTO jobs(job_position, job_amount, job_payment, job_no, job_file, jc_id)
                VALUES('${job_position}', '${job_amount}', '${job_payment}', '${job_no}, 'null', '${result.insertId}')`;
                        mysqlConnection.query(sql, function (err, result) {
                            if (!err) res.json("Inserted successfully no file");
                            if (err) console.log(err);
                        })
                    } else {
                        let sql = `INSERT INTO jobs (job_position, job_amount, job_payment, job_no, job_file, jc_id)
                        VALUES ('${job_position}', '${job_amount}', '${job_payment}', '${job_no}, '${req.file.filename}', '${result.insertId}')`;
                        mysqlConnection.query(sql, function (err, result) {
                            if (!err) res.json("Inserted successfully file");
                            if (err) console.log(err);
                        })
                    }
                }
            }
            res.json("Inserted successfully");
            if (err) console.log(err);
        })
    } else {
        let sql = `UPDATE job_calendar SET jc_type = ${jc_type}, jc_start = '${jc_start}', jc_end = '${jc_end}', update_at =
                        '${update_at}' WHERE jc_id = ${jc_id}`;
        mysqlConnection.query(sql, function (err, result) {
            if (!err) res.json({
                status: "update successful",
            })
            if (err) console.log(err);
        })
    }
}

const Delete_Apply = (req, res) => {
    // let sql = ``
}

const GetPositon = (req, res) => {
    const { id } = req.params
    let sql = `SELECT * FROM type_position
    JOIN position ON position.p_type = type_position.id
    WHERE position.status = 1 AND type_position.id = ${id}`;
    mysqlConnection.query(sql, function (err, result) {
        if (!err) res.json(result);
        if (err) console.log(err);
    })
}

const UpdateApplyAndInsert = (req, res) => {

    res.json(req.body);
    // console.log(req);
    // const { jc_type, jc_start, jc_end, update_at, create_at, jc_id } = req.body;
    // // console.log(jc_type, jc_start, jc_end, update_at, create_at, jc_id);
    // var lastJob_calendar = '';
    // if (!jc_id) {
    //     let sql = `INSERT INTO job_calendar(jc_start, jc_end, jc_type, create_at) VALUES ('${jc_start}','${jc_end}','${jc_type}','${moment().add(543, 'year').format()}')`;
    //     mysqlConnection.query(sql, function (err, result) {
    //         if (!err) {
    //             lastJob_calendar = result.insertId;
    //         };
    //         if (err) {
    //             res.json("Error")
    //         };
    //     })
    // } else {
    //     let sql = `UPDATE job_calendar SET jc_start='${jc_start}',jc_end='${jc_end}',jc_type='${jc_type}',update_at='${moment().add(543, 'year').format()}' WHERE ${jc_id}`;
    //     mysqlConnection.query(sql, function (err, result) {
    //         if (!err) {

    //         };
    //         if (err) {
    //             res.json("Error")
    //         };
    //     })
    // }

    // const { job_position, job_amount, job_payment, job_no, job_file, job_id } = req.body;
    // if (!job_id) {
    //     let sqlJob = `INSERT INTO jobs(job_position, job_amount, job_payment, job_no, job_file, jc_id,create_at) VALUES ('${job_position}','${job_amount}','${job_payment}','${job_no}','${req.file.filename}','${lastJob_calendar}','${moment().add(543, 'year').format()}')`;
    //     mysqlConnection.query(sqlJob, function (err, result) {
    //         if (!err) {
    //             res.json("Insert successful")
    //         };
    //         if (err) {
    //             res.json("Error")
    //         };
    //     })
    // } else {
    //     let sqlJob = `UPDATE jobs SET job_position='${job_position}',job_amount='${job_amount}',job_payment='${job_payment}',job_no='${job_no}',job_file='${req.file.filename}',jc_id='${jc_id}',update_at ='${moment().add(543, 'year').format()}', WHERE ${jc_id}`;
    //     mysqlConnection.query(sqlJob, function (err, result) {
    //         if (!err) {
    //             res.json("Update successful")
    //         };
    //         if (err) {
    //             res.json("Error")
    //         };
    //     })
    // }

}

const testApi = async (req, res) => {
}

const Tree = async (req, res) => {
    let sql = "SELECT org_id,org_name,org_active,org_parent FROM organization ORDER BY org_id ASC";
    mysqlConnection.query(sql, function (err, result) {
        if (!err) {
            let makeTree = (org, org_parent) => {
                let node = {};
                org
                    .filter(n => n.org_parent === org_parent)
                    .forEach(n => node[n.org_id] = {
                        data: n,
                        children: makeTree(org, n.org_id)
                    });
                return node;
            }
            let data = makeTree(result, null);
            res.json(data)
        } else {
            console.log(err);
        }
    })
}
module.exports = {
    GetMenuAdmin,
    GetpreName,
    BloodType,
    Status_relationship,
    GetTbl_country,
    GetTbl_district,
    GetTbl_subdistrict,
    GetTbl_religion,
    DeleteManagePosition,
    GetApplyAll,
    Apply_Applycheck,
    GetPositon,
    // InsertApply,
    PermissionsGetAll,
    GetCheckPermissionsAll,
    Insert_Apply,
    Delete_Apply,
    UpdateApplyAndInsert,
    testApi,
    Tree

    // Permission
}
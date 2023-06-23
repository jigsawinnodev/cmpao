
const { mysqlConnection } = require('../../Config/DB')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const moment = require('moment');

const UpdateApply_InsertJob = (req, res) => {
    const { jc_id, jc_type, jc_start, jc_end, job_position, job_amount, job_payment, job_no, type_file, tree, job_detail_payment } = req.body
    const { filename } = req.file;
    const Date_jc_start = moment(jc_start).add('543', 'y').format('YYYY-MM-DD');
    const Date_jc_end = moment(jc_end).add('543', 'y').format('YYYY-MM-DD');

    let sql = `UPDATE job_calendar SET jc_start='${Date_jc_start}',jc_end='${Date_jc_end}',jc_type='${jc_type}',update_at='${moment().format('YYYY-MM-DD hh:mm:ss')}' WHERE jc_id = ${jc_id}`;
    mysqlConnection.query(sql, function (err, result) {
        if (!err) {
            let sql_Job = `INSERT INTO jobs(job_position,job_amount,job_file,jc_id,job_payment,job_no, create_at, job_detail_payment) VALUES (${job_position},'${job_amount}','${filename}',${jc_id},${job_payment},'${job_no}','${moment().format('YYYY-MM-DD HH:mm:s')}','${job_detail_payment}')`;
            mysqlConnection.query(sql_Job, function (err, result) {
                if (!err) {
                    var lastID_Jobs = result.insertId;
                    for (let index = 0; index < type_file.length; index++) {
                        let sqlTypeFile = `INSERT INTO job_file( job_id, jobf_type, create_at) VALUES (
                                    ${lastID_Jobs},${type_file[index]},'${moment().format('YYYY-MM-DD HH:mm:ss')}')`;
                        mysqlConnection.query(sqlTypeFile, function (err, result) {
                            if (!err) {
                            };
                            if (err) console.log(err);
                        })
                    }
                    for (let index = 0; index < tree.length; index++) {
                        let sqlTree = `INSERT INTO job_org(org_id, job_id, create_at) VALUES (${tree[index]},${lastID_Jobs},'${moment().format('YYYY-MM-DD HH:mm:ss')}')`
                        mysqlConnection.query(sqlTree, function (err, result) {
                            if (!err) {
                                // console.log("insert");
                            };
                            if (err) console.log(err);
                        })
                    }
                };
                if (err) console.log(err);
            })
        };
        res.json({
            status: 'success'
        });
        if (err) console.log(err);
    })
}

const UpdateApply_UpdateJob = (req, res) => {
    console.log(req.body);
    const { jc_id, jc_type, jc_start, jc_end, job_position, job_amount, job_payment, job_no, type_file, tree, job_detail_payment, file, job_id } = req.body;
    const Date_jc_start = moment(jc_start).add('543', 'y').format('YYYY-MM-DD');
    const Date_jc_end = moment(jc_end).add('543', 'y').format('YYYY-MM-DD');
    let sql = `UPDATE job_calendar SET jc_start='${Date_jc_start}',jc_end='${Date_jc_end}',jc_type='${jc_type}',update_at='${moment().format('YYYY-MM-DD hh:mm:ss')}' WHERE jc_id = ${jc_id}`;
    mysqlConnection.query(sql, function (err, result) {
        if (!err) {
            if (req.file != undefined) {
                let sql_UpdateJob = `UPDATE jobs SET job_position='${job_position}',job_amount='${job_amount}',job_file='${req.file.filename}',jc_id='${jc_id}',job_payment='${job_payment}',job_no='${job_no}',update_at='${moment().format('YYYY-MM-DD hh:mm:ss')}',job_detail_payment='${job_detail_payment}' WHERE job_id = ${job_id}`;
                mysqlConnection.query(sql_UpdateJob, function (err, result) {
                    if (!err) {

                    };
                    if (err) console.log(err);
                })
                let sqlDeleteFile = `DELETE FROM job_file WHERE job_id = ${job_id}`
                mysqlConnection.query(sqlDeleteFile, function (err, result) {
                    if (!err) {
                        if (type_file.length == 1) {
                            let sql = `INSERT INTO job_file(job_id, jobf_type, create_at) VALUES 
                            ('${job_id}','${type_file}','${moment().format('YYYY-MM-DD hh:mm:s')}')`;
                            mysqlConnection.query(sql, function (err, result) {
                                if (!err) {

                                };
                                if (err) console.log(err);
                            })
                        } else {
                            for (let index = 0; index < type_file.length; index++) {
                                let sql = `INSERT INTO job_file(job_id, jobf_type, create_at) VALUES 
                                ('${job_id}','${type_file[index]}','${moment().format('YYYY-MM-DD hh:mm:s')}')`;
                                mysqlConnection.query(sql, function (err, result) {
                                    if (!err) {

                                    };
                                    if (err) console.log(err);
                                })
                            }
                        }
                    }
                    if (err) console.log(err);
                })
                let sqlDeleteTree = `DELETE FROM job_org WHERE job_id =${job_id}`;
                mysqlConnection.query(sqlDeleteTree, function (err, result) {
                    if (!err) {
                        if (tree.length == 1) {
                            let sqlTree = `INSERT INTO job_org(org_id, job_id, create_at) VALUES (${tree},${job_id},'${moment().format('YYYY-MM-DD HH:mm:s')}')`
                            mysqlConnection.query(sqlTree, function (err, result) {
                                if (!err) {
                                };
                                if (err) console.log(err);
                            })
                        } else {
                            for (let index = 0; index < tree.length; index++) {
                                let sqlTree = `INSERT INTO job_org(org_id, job_id, create_at) VALUES (${tree[index]},${job_id},'${moment().format('YYYY-MM-DD HH:mm:s')}')`
                                mysqlConnection.query(sqlTree, function (err, result) {
                                    if (!err) {
                                    };
                                    if (err) console.log(err);
                                })
                            }
                        }
                        // if (type_file.length == 1) {
                        //     let sql = `INSERT INTO job_file(job_id, jobf_type, create_at) VALUES 
                        //     ('${job_id}','${type_file}','${moment().format('YYYY-MM-DD hh:mm:ss')}')`;
                        //     mysqlConnection.query(sql, function (err, result) {
                        //         if (!err) {

                        //         };
                        //         if (err) console.log(err);
                        //     })
                        // } else {
                        //     for (let index = 0; index < type_file.length; index++) {
                        //         let sql = `INSERT INTO job_file(job_id, jobf_type, create_at) VALUES 
                        //         ('${job_id}','${type_file[index]}','${moment().format('YYYY-MM-DD hh:mm:ss')}')`;
                        //         mysqlConnection.query(sql, function (err, result) {
                        //             if (!err) {

                        //             };
                        //             if (err) console.log(err);
                        //         })
                        //     }
                        // }
                    }
                    if (err) console.log(err);
                })
            } else {
                let sql_UpdateJob = `UPDATE jobs SET job_position='${job_position}',job_amount='${job_amount}',job_file='${file}',jc_id='${jc_id}',job_payment='${job_payment}',job_no='${job_no}',update_at='${moment().format('YYYY-MM-DD hh:mm:ss')}',job_detail_payment='${job_detail_payment}' WHERE job_id = ${job_id}`;
                mysqlConnection.query(sql_UpdateJob, function (err, result) {
                    if (!err) {
                        let sqlDeleteFile = `DELETE FROM job_file WHERE job_id = ${job_id}`
                        mysqlConnection.query(sqlDeleteFile, function (err, result) {
                            if (!err) {
                                if (type_file.length == 1) {
                                    let sql = `INSERT INTO job_file(job_id, jobf_type, create_at) VALUES 
                                    ('${job_id}','${type_file}','${moment().format('YYYY-MM-DD hh:mm:s')}')`;
                                    mysqlConnection.query(sql, function (err, result) {
                                        if (!err) {

                                        };
                                        if (err) console.log(err);
                                    })
                                } else {
                                    for (let index = 0; index < type_file.length; index++) {
                                        let sql = `INSERT INTO job_file(job_id, jobf_type, create_at) VALUES 
                                        ('${job_id}','${type_file[index]}','${moment().format('YYYY-MM-DD hh:mm:s')}')`;
                                        mysqlConnection.query(sql, function (err, result) {
                                            if (!err) {

                                            };
                                            if (err) console.log(err);
                                        })
                                    }
                                }
                            }
                            if (err) console.log(err);
                        })
                        let sqlDeleteTree = `DELETE FROM job_org WHERE job_id =${job_id}`;
                        mysqlConnection.query(sqlDeleteTree, function (err, result) {
                            if (!err) {
                                if (tree.length == 1) {
                                    let sqlTree = `INSERT INTO job_org(org_id, job_id, create_at) VALUES (${tree},${job_id},'${moment().format('YYYY-MM-DD HH:mm:s')}')`
                                    mysqlConnection.query(sqlTree, function (err, result) {
                                        if (!err) {
                                        };
                                        if (err) console.log(err);
                                    })
                                } else {
                                    for (let index = 0; index < tree.length; index++) {
                                        let sqlTree = `INSERT INTO job_org(org_id, job_id, create_at) VALUES (${tree[index]},${job_id},'${moment().format('YYYY-MM-DD HH:mm:s')}')`
                                        mysqlConnection.query(sqlTree, function (err, result) {
                                            if (!err) {
                                            };
                                            if (err) console.log(err);
                                        })
                                    }
                                }
                                // if (type_file.length == 1) {
                                //     let sql = `INSERT INTO job_file(job_id, jobf_type, create_at) VALUES 
                                //     ('${job_id}','${type_file}','${moment().format('YYYY-MM-DD hh:mm:ss')}')`;
                                //     mysqlConnection.query(sql, function (err, result) {
                                //         if (!err) {

                                //         };
                                //         if (err) console.log(err);
                                //     })
                                // } else {
                                //     for (let index = 0; index < type_file.length; index++) {
                                //         let sql = `INSERT INTO job_file(job_id, jobf_type, create_at) VALUES 
                                //         ('${job_id}','${type_file[index]}','${moment().format('YYYY-MM-DD hh:mm:ss')}')`;
                                //         mysqlConnection.query(sql, function (err, result) {
                                //             if (!err) {

                                //             };
                                //             if (err) console.log(err);
                                //         })
                                //     }
                                // }
                            }
                            if (err) console.log(err);
                        })
                    };
                    if (err) console.log(err);
                })
            }
        }
        res.json({
            status: 'success'
        });
        if (err) {
            console.log(err);
        }
    })

}
module.exports = {
    UpdateApply_InsertJob,
    UpdateApply_UpdateJob
}
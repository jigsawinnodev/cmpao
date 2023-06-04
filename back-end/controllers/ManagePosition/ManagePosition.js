const { mysqlConnection } = require('../../Config/DB')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const moment = require('moment');
moment.locale()


const GetAllPosition = (req, res) => {
    let sql =
        `SELECT
            POSITION.*,
            type_position.name
        FROM
            POSITION
        JOIN type_position ON POSITION.p_type = type_position.id
        WHERE
            POSITION.status = 1
        ORDER BY
            POSITION.p_id ASC`
    mysqlConnection.query(sql, function (err, result) {
        if (!err) {
            res.json(result)
        };
        if (err) console.log(err);
    })
}


const manage_Position = (req, res, next) => {

    const { p_name, p_id, p_type, p_active, file } = req.body;
    // console.log(req.files);
    if (!p_id) {
        let sql = `INSERT INTO cmpao.position (p_name, p_type, p_active,create_at) VALUES ('${p_name}', ${p_type}, ${p_active}, '${moment().format('YYYY-MM-DD HH:MM:S')}')`;
        mysqlConnection.query(sql, function (err, result) {
            if (!err) {
                if (!req.fileValidationError) {
                    if (req.files) {
                        console.log(req.files);
                        for (let index = 0; index < req.files.length; index++) {
                            let sql_file = `INSERT INTO cmpao.file_position (fp_name, p_id , create_at) VALUES ('${req.files[index].filename}', ${result.insertId} , '${moment().format('YYYY-MM-DD HH:MM:S')}')`;
                            mysqlConnection.query(sql_file, function (err, result) {
                                if (!err) {
                                    console.log('Insert file');
                                };
                                if (err) console.log(err);
                            })
                        }
                        res.json("Inserted successfully and file")
                    }
                    // else {
                    //     let sql_file = `INSERT INTO cmpao.file_position (fp_name, p_id ,create_at ) VALUES ('null', ${result.insertId} , '${moment().format('YYYY-MM-DD HH:MM:S')}')`;
                    //     mysqlConnection.query(sql_file, function (err, result) {
                    //         if (!err) {

                    //         };
                    //         if (err) console.log(err);
                    //     })
                    //     res.json("Inserted successfully and file")
                    // }
                }
            }
            if (err) {
                res.status(404).json();
            };
        })
    } else {
        let sql = `UPDATE cmpao.position SET p_name = '${p_name}', p_type = ${p_type}, p_active = ${p_active}, updated_at = '${moment().format('YYYY-MM-DD HH:MM:S')}' WHERE p_id = ${p_id}`;
        mysqlConnection.query(sql, function (err, result) {
            if (!err) {
                if (!req.fileValidationError) {
                    let sqlDeleteFile = `UPDATE file_position SET is_active = 0 WHERE p_id = ${p_id}`;
                    mysqlConnection.query(sqlDeleteFile, function (err, result) {
                        if (!err) {
                        };
                        if (err) console.log(err);
                    })
                    if (file?.length >= 2) {
                        for (let index = 0; index < file.length; index++) {
                            let sqlInsertFile = `INSERT INTO file_position(fp_name, p_id, update_at) VALUES ('${file[index]}' , ${p_id},'${moment().format('YYYY-MM-DD HH:MM:S')}')`
                            mysqlConnection.query(sqlInsertFile, function (err, result) {
                                if (!err) {
                                };
                                if (err) console.log(err);
                            })
                        }
                    } else if (file?.length == 1) {
                        let sqlInsertFile = `INSERT INTO file_position(fp_name, p_id, update_at) VALUES ('${file}' , ${p_id},'${moment().format('YYYY-MM-DD HH:MM:S')}')`
                        mysqlConnection.query(sqlInsertFile, function (err, result) {
                            if (!err) {
                            };
                            if (err) console.log(err);
                        })
                    }
                    if (req.files) {
                        for (let index = 0; index < req.files.length; index++) {
                            console.log(req.files[index]);
                            let sqlInsertFile = `INSERT INTO file_position(fp_name, p_id, update_at) VALUES ('${req.files[index].filename}', ${p_id},'${moment().format('YYYY-MM-DD HH:MM:S')}')`
                            mysqlConnection.query(sqlInsertFile, function (err, result) {
                                if (!err) {
                                };
                                if (err) console.log(err);
                            })
                        }
                    }
                    res.json("Update successful file")
                }
            }
            if (err) console.log(err);
        })
    }
}

const Delete_positions = (req, res) => {
    const { id } = req.params
    console.log(id);
    let sql = `UPDATE cmpao.position SET status = 0 WHERE p_id = ${id}`
    mysqlConnection.query(sql, function (err, result) {
        if (!err) {
            // console.log(result);
        };
        if (err) console.log(err);
    })
}
const GetFilePositions = (req, res) => {
    const { id } = req.params;
    let sql = `SELECT * FROM file_position WHERE file_position.p_id = ${id} AND is_active = 1`;
    mysqlConnection.query(sql, function (err, result) {
        if (!err) {
            res.json(result)
        };
        if (err) console.log(err);
    })
}

module.exports = {
    GetAllPosition,
    manage_Position,
    Delete_positions,
    GetFilePositions
}
const { mysqlConnection } = require('../Config/DB')
const bcrypt = require('bcrypt');
const saltRounds = 10;
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
const GetAllPosition = (req, res) => {
    // let sql = `
    // SELECT position.*, type_position.name
    // FROM position
    // JOIN type_position ON position.p_type = type_position.id
    // ORDER BY position.p_id ASC`;
    let sql =
        `SELECT POSITION.*, type_position.name, file_position.fp_name FROM POSITION JOIN type_position ON POSITION.p_type = type_position.id JOIN file_position ON file_position.p_id = POSITION.p_id WHERE POSITION.status = 1 ORDER BY POSITION.p_id ASC`
    mysqlConnection.query(sql, function (err, result) {
        if (!err) {
            let data = [];
            for (let index = 0; index < result.length; index++) {
                result[index].p_file = `${baseURL_PDF}${result[index].fp_name}`
                data.push(result[index]);
            }
            // console.log(data);
            res.json(data)
        };
        if (err) console.log(err);
    })
}
const manage_Position = (req, res, next) => {

    const { p_name, p_id, p_type, p_active } = req.body;
    // console.log(req.files);
    if (p_id === "") {
        let sql = `INSERT INTO cmpao.position (p_name, p_type, p_active) VALUES ('${p_name}', ${p_type}, ${p_active})`;
        mysqlConnection.query(sql, function (err, result) {
            if (!err) {
                // console.log(req.file);
                if (!req.fileValidationError) {
                    if (req.file) {
                        // console.log("req.file");
                        let sql_file = `INSERT INTO cmpao.file_position (fp_name, p_id) VALUES ('${req.file.filename}', ${result.insertId})`;
                        mysqlConnection.query(sql_file, function (err, result) {
                            if (!err) {

                            };
                            if (err) console.log(err);
                        })
                        res.json("Inserted successfully and file")
                    };
                }
            }
            if (err) {
                res.status(404).json();
            };
        })
    } else {
        let sql = `UPDATE cmpao.position SET p_name = '${p_name}', p_type = ${p_type}, p_active = ${p_active} WHERE p_id = ${p_id}`;
        mysqlConnection.query(sql, function (err, result) {
            if (!err) {
                if (!req.fileValidationError) {
                    if (!req.file) {
                        let sql = `UPDATE cmpao.file_position SET fp_name = null WHERE p_id = ${p_id}`
                        mysqlConnection.query(sql, function (err, result) {
                            if (!err) {
                                res.json("Update successful no file")
                            };
                            if (err) console.log(err);
                        })

                    } else {
                        let sql = `UPDATE cmpao.file_position SET fp_name = '${req.file.filename}' WHERE p_id = ${p_id}`
                        mysqlConnection.query(sql, function (err, result) {
                            if (!err) {
                                // console.log(rows);
                                res.json("Update successful file")
                            };
                            if (err) console.log(err);
                        })
                    }
                    // res.json("Update successful file")
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

// end_positions

// Member
const selectMemberAll = (req, res) => {
    let sql = `SELECT member.*, (
                SELECT prename_name
                FROM prename
                WHERE prename_id = member.m_prename) AS prename
                FROM member
                WHERE member.status = 1
                ORDER BY m_id DESC`;
    mysqlConnection.query(sql, function (err, result) {
        if (!err) res.json(result);
        if (err) console.log(err);
    })
}

const Delete_Member = (req, res) => {
    let id = req.params.id
    let sql = `UPDATE member SET status = 0 WHERE m_id = ${id}`
    mysqlConnection.query(sql, function (err, result) {
        if (!err) res.json(result);
        if (err) console.log(err);
    })
}
const CreateMember = (req, res) => {
    console.log(req.body);
    res.json(req.body);
    // let sql = 'INSERT INTO member (m_id, m_img, m_username, m_password, m_idcard, m_email, m_active, m_status, m_prename, m_firstname, m_lastname, m_race, m_nation, m_religion, m_blood, m_birthday, m_spouse, m_relationship, m_education, m_major, m_gradday, m_school, m_idcard_province, m_house_no, m_moo, m_alley, m_road, m_subdistrict, m_district, m_province, m_zipcode, m_phone, m_fathername, m_father_occupation, m_mothername, m_mother_occupation, is_accept, reset_link_token, expire_date, reset_active, login_time, m_idcard_district, m_idcard_issuance_date, m_mother_nationality, m_father_nationality, spouse_nation, spouse_occupation, m_telephone, m_hometown, m_domicile) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    // mysqlConnection.query(sql, function (err, result) {
    //     if (!err) res.json(result);
    //     if (err) console.log(err);
    // })
}
// End Member

const GetApplyAll = (req, res) => {
    let sql = "SELECT job_calendar.*, type_position.name AS position_name, ( SELECT SUM(job_amount) FROM jobs INNER JOIN POSITION ON jobs.job_position = POSITION.p_id WHERE jobs.jc_id = job_calendar.jc_id ) AS count_position, ( SELECT COUNT(*) FROM job_application JOIN jobs ON jobs.job_id = job_application.job_id WHERE job_calendar.jc_id = jobs.jc_id ) AS count_apply FROM job_calendar JOIN type_position ON type_position.id = job_calendar.jc_type WHERE job_calendar.status = 1 ORDER BY job_calendar.jc_id DESC";
    mysqlConnection.query(sql, function (err, result) {
        if (!err) res.json(result);
        if (err) console.log(err);
    })
}

const Apply_Applycheck = (req, res) => {
    var id = req.params.id;
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
    let sql = "SELECT * FROM permission ORDER BY per_id ASC";
    mysqlConnection.query(sql, function (err, result) {
        if (!err) {
            const data = [];

            result.forEach((value) => {
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
        let sql = `INSERT INTO job_calendar (jc_type, jc_start, jc_end,create_at) VALUES 
        (${jc_type}, '${jc_start}', '${jc_end}', '${create_at}')`;
        mysqlConnection.query(sql, function (err, result) {
            if (!err) {
                if (!req.fileValidationError) {
                    if (!req.file) {
                        let sql = `INSERT INTO jobs (job_position, job_amount, job_payment, job_no, job_file, jc_id) 
                VALUES ('${job_position}', '${job_amount}', '${job_payment}', '${job_no}, 'null', '${result.insertId}')`;
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


module.exports = {
    GetMenuAdmin,
    GetpreName,
    BloodType,
    Status_relationship,
    GetTbl_country,
    GetTbl_district,
    GetTbl_subdistrict,
    CreateMember,
    GetTbl_religion,
    DeleteManagePosition,
    selectMemberAll,
    Delete_Member,
    GetApplyAll,
    Apply_Applycheck,
    GetAllPosition,
    manage_Position,
    Delete_positions,
    // InsertApply,
    PermissionsGetAll,
    GetCheckPermissionsAll,
    Insert_Apply,
    Delete_Apply
    // Permission
}
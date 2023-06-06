const { mysqlConnection } = require('../../Config/DB')
var baseURL_IMG = 'http://localhost:9500/public/img/'
var baseURL_PDF = 'http://localhost:9500/public/pdf/'
const bcrypt = require('bcrypt');
const saltRounds = 10;

const user_all = (req, res) => {
    let sql = ` SELECT *
                FROM user
                JOIN user_permission ON user.user_permission = user_permission.permiss_id
                JOIN prename ON user.user_prename = prename.prename_id
                WHERE user_status = 1
                ORDER BY user_id ASC`;
    mysqlConnection.query(sql, function (err, result) {
        if (!err) {
            // console.log(result);
            res.json(result);
        };
        if (err) console.log(err);
    })
}

const GetUser_permission = (req, res) => {
    let sql = `SELECT * FROM user_permission WHERE permiss_id != 4 ORDER BY permiss_id ASC`;
    mysqlConnection.query(sql, function (err, result) {
        if (!err) {
            res.json(result);
        };
        if (err) console.log(err);
    })
}
const Insert_Edit_User = (req, res) => {
    // console.log("qweqxxxxxxxxxxxxxxxxxxxwe");
    const { user_idcard, user_prename, user_firstname, user_lastname, user_username, user_password, user_birthday, user_position, user_permission, user_email, user_phone, user_active, user_id, img } = req.body;

    if (!user_id) {
        let sqlCheck = `SELECT * FROM cmpao.user WHERE user_username = '${user_username}'`;
        mysqlConnection.query(sqlCheck, async function (err, result) {
            if (!err) {
                if (result.length > 0) {
                    res.json({ status: "1" });
                } else {
                    const HashPassword = await bcrypt.hash(user_password, 10);
                    if (!req.fileValidationError) {
                        // console.log(req.file);
                        if (!req.file) {
                            let sql = `
                        INSERT INTO cmpao.user (user_idcard, user_prename, user_firstname,user_lastname, user_username, user_password, user_birthday, user_position, user_permission, user_email, user_phone, user_active, user_img) 
                        VALUES ('${user_idcard}', ${user_prename},'${user_firstname}','${user_lastname}','${user_username}','${HashPassword}',
                        '${user_birthday}', '${user_position}',${user_permission},'${user_email}','${user_phone}',${user_active},null)`;
                            mysqlConnection.query(sql, function (err, result) {
                                if (!err) {
                                    res.json({ status: 'success' });
                                };
                                if (err) console.log(err);
                            })
                        } else {
                            let sql = `
                        INSERT INTO cmpao.user (user_idcard, user_prename, user_firstname, user_lastname, user_username, user_password, user_birthday, user_position, user_permission, user_email, user_phone, user_active, user_img) 
                        VALUES ('${user_idcard}', ${user_prename},'${user_firstname}','${user_lastname}','${user_username}','${HashPassword}',
                        '${user_birthday}', '${user_position}',${user_permission},'${user_email}','${user_phone}',${user_active},'${req.file.filename}')`;

                            mysqlConnection.query(sql, function (err, result) {
                                if (!err) {
                                    res.json({ status: 'success' });
                                };
                                if (err) console.log(err);
                            })
                        }
                    }
                }
            };
            if (err) console.log(err);
        })
    } else {
        // const { user_idcard, user_prename, user_firstname, user_lastname, user_username, user_password, user_birthday, user_position, user_permission, user_email, user_phone, user_active, user_id } = req.body;
        console.log(req.body);

        let sqlCheck = `SELECT * FROM cmpao.user WHERE user_username = '${user_username}'`;
        mysqlConnection.query(sqlCheck, async function (err, result) {
            if (!err) {
                if (result.length < 1) {
                    res.json({
                        status: "username_is_ready"
                    })
                } else {
                    // console.log(result);
                    const match = await bcrypt.compare(result[0].user_password, user_password);
                    if (match) {
                        let sql = `UPDATE user SET user_password = '${user_password}' WHERE user_id = '${user_id}'`;
                        mysqlConnection.query(sql, function (err, result) {
                            if (!err) {
                                // res.json({ status: 'success' });
                            };
                            if (err) console.log(err);
                        })
                    } else {
                        const HashPassword = await bcrypt.hash(user_password, 10);
                        let sql = `UPDATE user SET user_password = '${HashPassword}' WHERE user_id = '${user_id}'`;
                        mysqlConnection.query(sql, function (err, result) {
                            if (!err) {
                                // res.json({ status: 'success' });
                            };
                            if (err) console.log(err);
                        })
                    }
                    if (!req.fileValidationError) {
                        // console.log(req.file);
                        if (!req.file) {
                            const { img } = req.body
                            var splitData = null
                            var DataImg = null
                            if (!img) {
                                splitData = null
                            } else {
                                splitData = img.split('/')
                                DataImg = splitData[5]
                            }
                            // console.log(splitData[5]);

                            let sql = `UPDATE user SET user_idcard = '${user_idcard}', user_prename = '${user_prename}', user_firstname = '${user_firstname}', user_lastname = '${user_lastname}', user_username = '${user_username}', user_birthday = '${user_birthday}', user_position = '${user_position}', user_permission = '${user_permission}', user_email = '${user_email}', user_phone = '${user_phone}', user_active = '${user_active}',user_img= '${DataImg}' WHERE user_id = '${user_id}'`;
                            mysqlConnection.query(sql, function (err, result) {
                                if (!err) {
                                    res.json({ status: 'success' });
                                };
                                if (err) console.log(err);
                            })
                        } else {
                            let sql = `UPDATE user SET user_idcard = '${user_idcard}', user_prename = '${user_prename}', user_firstname = '${user_firstname}', user_lastname = '${user_lastname}', user_username = '${user_username}', user_birthday = '${user_birthday}', user_position = '${user_position}', user_permission = '${user_permission}', user_email = '${user_email}', user_phone = '${user_phone}', user_active = '${user_active}',user_img= '${req.file.filename}' 
                            WHERE user_id = '${user_id}'`;
                            mysqlConnection.query(sql, function (err, result) {
                                if (!err) {
                                    res.json({ status: 'success' });
                                };
                                if (err) console.log(err);
                            })
                        }
                    }
                }
            }
        });
    }
}

const FindUserByID = (req, res) => {
    const { id } = req.params;
    if (id != undefined) {
        let sql = `SELECT * FROM user WHERE user_id = ${id}`;
        mysqlConnection.query(sql, function (err, result) {
            if (!err) {
                let data = [];
                for (let index = 0; index < result.length; index++) {
                    result[index].user_img = `${baseURL_IMG}${result[index].user_img}`
                    data.push(result[index]);
                }
                // console.log(data);
                res.json(data)
            }
            if (err) console.log(err);
        });
    } else {
        res.json("Error")
    }
};
const Delete_User = (req, res) => {
    const { id } = req.params
    console.log(id);
    let sql = `UPDATE user SET user_status = 0 WHERE user_id = ${id}`;
    mysqlConnection.query(sql, function (err, result) {
        if (!err) {
            res.json({ status: 'success' });
        };
        if (err) console.log(err);
    })
}

module.exports = {
    user_all,
    GetUser_permission,
    Insert_Edit_User,
    FindUserByID,
    Delete_User
}
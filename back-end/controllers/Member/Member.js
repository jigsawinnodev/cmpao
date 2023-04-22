const { mysqlConnection } = require('../../Config/DB')
const bcrypt = require('bcrypt');
const saltRounds = 10;
var baseURL_IMG = 'http://localhost:9500/public/img/'
var baseURL_PDF = 'http://localhost:9500/public/pdf/'

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


const CreateMember = async (req, res) => {
    // console.log(req.body);
    const {
        m_active,
        m_alley,
        m_birthday,
        m_blood,
        m_district,
        m_email,
        m_father_occupation,
        m_fathername,
        m_firstname,
        m_house_no,
        m_id,
        m_idcard,
        m_lastname,
        m_moo,
        m_mother_occupation,
        m_mothername,
        m_nation,
        m_password,
        m_prename,
        m_province,
        m_race,
        m_relationship,
        m_religion,
        m_road,
        m_spouse,
        m_subdistrict,
        m_username,
        m_zipcode,
        m_phone } = req.body

    // res.json(req.body);
    if (!m_id) {
        if (!req.fileValidationError) {
            if (!req.file) {
                const HashPassword = await bcrypt.hash(m_password, 10);
                let sql = `INSERT INTO member (m_img, m_username, m_password, m_idcard, m_email, m_active, m_prename, m_firstname, m_lastname, m_race, m_nation, m_religion, m_blood, m_birthday, m_spouse, m_relationship, m_house_no, m_moo, m_alley, m_road, m_subdistrict, m_district, m_province, m_zipcode, m_phone, m_fathername, m_father_occupation, m_mothername, m_mother_occupation) 
                VALUES (null, '${m_username}', '${HashPassword}', '${m_idcard}', '${m_email}', ${m_active}, ${m_prename}, '${m_firstname}', '${m_lastname}', '${m_race}', '${m_nation}', '${m_religion}', '${m_blood}', '${m_birthday}', '${m_spouse}', ${m_relationship}, 
                '${m_house_no}', '${m_moo}', '${m_alley}','${m_road}', ${m_subdistrict}, ${m_district}, ${m_province}, '${m_zipcode}', 
                '${m_phone}', '${m_fathername}', '${m_father_occupation}', '${m_mothername}', '${m_mother_occupation}')`;
                mysqlConnection.query(sql, function (err, result) {
                    if (!err) res.json({
                        text: "Insert successfully no File",
                        status: "success"
                    });
                    if (err) console.log(err);
                })
            } else {
                const HashPassword = await bcrypt.hash(m_password, 10);
                let sql = `INSERT INTO member (m_img, m_username, m_password, m_idcard, m_email, m_active, m_prename, m_firstname, m_lastname, m_race, m_nation, m_religion, m_blood, m_birthday, m_spouse, m_relationship, m_house_no, m_moo, m_alley, m_road, m_subdistrict, m_district, m_province, m_zipcode, m_phone, m_fathername, m_father_occupation, m_mothername, m_mother_occupation) 
                VALUES ('${req.file.filename}', '${m_username}', '${HashPassword}', '${m_idcard}', '${m_email}', ${m_active}, ${m_prename}, '${m_firstname}', '${m_lastname}', 
                '${m_race}', '${m_nation}', '${m_religion}','${m_blood}','${m_birthday}', '${m_spouse}', ${m_relationship}, '${m_house_no}', '${m_moo}', '${m_alley}','${m_road}', ${m_subdistrict}, ${m_district}, ${m_province}, 
                '${m_zipcode}', '${m_phone}', '${m_fathername}', '${m_father_occupation}', '${m_mothername}', '${m_mother_occupation}')`;
                mysqlConnection.query(sql, function (err, result) {
                    if (!err) res.json({
                        text: "Insert successfully File",
                        status: "success"
                    });
                    if (err) console.log(err);
                })
            }
        }
    } else {
        let sqlCheck = `SELECT * FROM member WHERE m_username = '${m_username}'`;
        mysqlConnection.query(sqlCheck, async function (err, result) {
            if (result.length > 1) {
                res.json({
                    status: "username_is_ready"
                })
            } else {
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
                        const HashPassword = await bcrypt.hash(m_password, 10);
                        let sql = `UPDATE member SET m_img = '${DataImg}', m_username = '${m_username}', m_password = '${HashPassword}', m_idcard = '${m_idcard}', m_email = '${m_email}', m_active = ${m_active}, m_prename = ${m_prename}, m_firstname = '${m_firstname}', m_lastname = '${m_lastname}', m_race = '${m_race}', m_nation = '${m_nation}', m_religion = '${m_religion}', m_blood = '${m_blood}', m_birthday = '${m_birthday}', 
                        m_spouse = '${m_spouse}', m_relationship = ${m_relationship}, m_house_no = '${m_house_no}', m_moo = '${m_moo}', m_alley = '${m_alley}', m_road = '${m_road}', m_subdistrict = ${m_subdistrict}, m_district = ${m_district}, m_province = ${m_province}, m_zipcode = 
                        '${m_zipcode}', m_phone = '${m_phone}', m_fathername = '${m_fathername}', m_father_occupation = '${m_father_occupation}', m_mothername = 
                        '${m_mothername}', m_mother_occupation = '${m_mother_occupation}' WHERE m_id = ${m_id}`;
                        mysqlConnection.query(sql, function (err, result) {
                            if (!err) res.json({
                                text: "Update successfully File",
                                status: "success"
                            });
                            if (err) console.log(err);
                        })
                    } else {
                        const HashPassword = await bcrypt.hash(m_password, 10);
                        let sql = `UPDATE member SET m_img = '${req.file.filename}', m_username = '${m_username}', m_password = '${HashPassword}', m_idcard = '${m_idcard}', m_email = '${m_email}', m_active = ${m_active}, m_prename = ${m_prename}, m_firstname = '${m_firstname}', m_lastname = '${m_lastname}', m_race = '${m_race}', m_nation = '${m_nation}', m_religion = '${m_religion}', m_blood = '${m_blood}', m_birthday = '${m_birthday}',m_spouse = '${m_spouse}', m_relationship = ${m_relationship}, m_house_no = '${m_house_no}', m_moo = '${m_moo}', m_alley = '${m_alley}', m_road = '${m_road}', m_subdistrict = ${m_subdistrict}, m_district = ${m_district}, m_province = ${m_province}, m_zipcode = 
                        '${m_zipcode}', m_phone = '${m_phone}', m_fathername = '${m_fathername}', m_father_occupation = '${m_father_occupation}', m_mothername = 
                        '${m_mothername}', m_mother_occupation = '${m_mother_occupation}' WHERE m_id = ${m_id}`;
                        mysqlConnection.query(sql, function (err, result) {
                            if (!err) if (!err) res.json({
                                text: "Update successfully new File",
                                status: "success"
                            });
                            if (err) console.log(err);
                        })
                    }
                }
            }
        })
    }
}

const selectMemberById = (req, res) => {
    const { id } = req.params
    let sql = `SELECT * FROM member WHERE m_id =${id}`
    mysqlConnection.query(sql, function (err, result) {
        if (!err) {
            let data = [];
            for (let index = 0; index < result.length; index++) {
                result[index].m_img = `${baseURL_IMG}${result[index].m_img}`
                data.push(result[index]);
            }
            // console.log(data);
            res.json(data)
            // res.json(result)
        }
        if (err) console.log(err);
    })

}




const Delete_Member = (req, res) => {
    let id = req.params.id
    let sql = `UPDATE member SET status = 0 WHERE m_id = ${id}`
    mysqlConnection.query(sql, function (err, result) {
        if (!err) {
            res.json({
                status: "success",
            })
        };
        if (err) console.log(err);
    })
}

module.exports = {
    Delete_Member,
    selectMemberById,
    CreateMember,
    selectMemberAll
}
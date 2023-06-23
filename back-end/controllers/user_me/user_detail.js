const { mysqlConnection } = require('../../Config/DB')
var baseURL_IMG = 'http://localhost:9500/public/img/'
var baseURL_PDF = 'http://localhost:9500/public/pdf/'
const moment = require('moment');


const Detail_Me = (req, res) => {
    // console.log(req.user);
    const { username } = req.user
    let sql = `SELECT 
                member.*,th_province.province_th,th_district.district_th,th_subdistrict.subdistrict_th
                FROM member 
                JOIN th_province ON th_province.id = member.m_province
                JOIN th_district ON th_district.id = member.m_district
                JOIN th_subdistrict ON th_subdistrict.id = member.m_subdistrict
                WHERE m_username = '${username}'`;
    mysqlConnection.query(sql, function (err, result) {
        if (!err) {
            res.json({
                data: result[0],
                status: true
            })
        };
        if (err) console.log(err);
    })
}



const UpdateDataDetail = (req, res) => {
    console.log(req.file);
    const {
        m_id,
        m_username,
        m_password,
        m_idCard,
        m_idCard_Province,
        m_titlename,
        m_name,
        m_lastname,
        m_nation,
        m_race,
        m_religion,
        m_blood,
        m_birthday,
        m_relationship,
        m_spouse,
        m_house_no,
        m_moo,
        m_alley,
        m_road,
        m_phone,
        m_email,
        m_province,
        m_district,
        m_subdistrict,
        m_zipcode,
        m_fathername,
        m_father_occupation,
        m_mothername,
        m_mother_occupation
    } = req.body;
    const { img } = req.body
    var splitData = null
    var DataImg = null
    if (!img) {
        let sql = `UPDATE
                member SET
                m_username ='${m_username}',
                m_password = '${m_password}',
                m_idCard = '${m_idCard}',
                m_idCard_Province = ${m_idCard_Province},
                m_prename = ${m_titlename},
                m_firstname = '${m_name}',
                m_lastname = '${m_lastname}',
                m_nation ='${m_nation}',
                m_race ='${m_race}',
                m_religion='${m_religion}',
                m_blood='${m_blood}',
                m_birthday='${m_birthday}',
                m_relationship=${m_relationship},
                m_spouse='${m_spouse}',
                m_house_no='${m_house_no}',
                m_moo='${m_moo}',
                m_alley='${m_alley}',
                m_road='${m_road}',
                m_phone='${m_phone}',
                m_email='${m_email}',
                m_province=${m_province},
                m_district=${m_district},
                m_subdistrict=${m_subdistrict},
                m_zipcode='${m_zipcode}',
                m_fathername='${m_fathername}',
                m_father_occupation='${m_father_occupation}',
                m_mothername='${m_mothername}',
                m_mother_occupation='${m_mother_occupation}',
                m_img ='${req.file.filename}',
                updated_at ='${moment().add(543, 'year').format()}'
                WHERE m_id = ${m_id}`
        mysqlConnection.query(sql, function (err, result) {
            if (!err) {
                res.json({
                    status: 'success'
                })
            };
            if (err) console.log(err);
        })
    } else {
        splitData = img.split('/')
        DataImg = splitData[5];
        let sql = `UPDATE
                member SET
                m_username ='${m_username}',
                m_password = '${m_password}',
                m_idCard = '${m_idCard}',
                m_idCard_Province = ${m_idCard_Province},
                m_prename = ${m_titlename},
                m_firstname = '${m_name}',
                m_lastname = '${m_lastname}',
                m_nation ='${m_nation}',
                m_race ='${m_race}',
                m_religion='${m_religion}',
                m_blood='${m_blood}',
                m_birthday='${m_birthday}',
                m_relationship=${m_relationship},
                m_spouse='${m_spouse}',
                m_house_no='${m_house_no}',
                m_moo='${m_moo}',
                m_alley='${m_alley}',
                m_road='${m_road}',
                m_phone='${m_phone}',
                m_email='${m_email}',
                m_province=${m_province},
                m_district=${m_district},
                m_subdistrict=${m_subdistrict},
                m_zipcode='${m_zipcode}',
                m_fathername='${m_fathername}',
                m_father_occupation='${m_father_occupation}',
                m_mothername='${m_mothername}',
                m_mother_occupation='${m_mother_occupation}',
                m_img ='${DataImg}',
                updated_at ='${moment().add(543, 'year').format()}'
                WHERE m_id = ${m_id}`
        mysqlConnection.query(sql, function (err, result) {
            if (!err) {
                res.json({
                    status: 'success'
                })
            };
            if (err) console.log(err);
        })
    }
}


const User_is_Accept = (req, res) => {
    const { id } = req.params
    let sql = `UPDATE member SET is_accept = 1, updated_at = '${moment().add(543, 'year').format()}'  WHERE m_id = ${id}`;
    mysqlConnection.query(sql, function (err, result) {
        if (!err) {
            res.json({
                status: 'success'
            })
        };
        if (err) {
            res.json({
                status: 'no_success'
            })
        };
    })
}

const registerJob = (req, res) => {
    console.log(req.file);
    console.log(req.body);
    const { m_id, m_idcard, m_relationship, m_prename, m_firstname, m_lastname, m_race, m_nation, m_religion, m_blood, m_birthday, m_idcard_province, m_house_no, m_moo, m_alley, m_road, m_subdistrict, m_district, m_province, m_zipcode, m_phone, m_fathername, m_father_occupation, m_mothername, m_mother_occupation, file, m_idcard_district, m_idcard_issuance_date, m_hometown, m_domicile, m_mother_nationality, m_father_nationality } = req.body;
    const { app_current_job, app_current_year, app_current_month, app_current_office, app_current_department, app_current_phone, app_current_position, app_current_salary, app_user, job_id, app_position, app_ability, jc_id } = req.body;
    let birthday = moment(m_birthday).add(543, 'year').format('YYYY-MM-DD');
    let Card_date = moment(m_idcard_issuance_date).add(543, 'year').format('YYYY-MM-DD');
    if (!req.file) {
        let sql = `UPDATE member SET m_img='${file}',m_idcard='${m_idcard}',m_prename='${m_prename}',m_firstname='${m_firstname}',m_lastname='${m_lastname}',m_race='${m_race}',m_nation='${m_nation}',m_religion='${m_religion}',m_blood='${m_blood}',m_birthday='${birthday}',m_relationship='${m_relationship}',m_idcard_province='${m_idcard_province}',m_house_no='${m_house_no}',m_moo='${m_moo}',m_alley='${m_alley}',m_road='${m_road}',m_subdistrict='${m_subdistrict}',m_district='${m_district}',m_province='${m_province}',m_zipcode='${m_zipcode}',m_phone='${m_phone}',m_fathername='${m_fathername}',m_father_occupation='${m_father_occupation}',m_mothername='${m_mothername}',m_mother_occupation='${m_mother_occupation}',updated_at='${moment().add(543, 'year').format('YYYY-MM-DD HH:mm:s')}',m_idcard_district='${m_idcard_district}', m_idcard_issuance_date='${Card_date}' , m_hometown='${m_hometown}', m_domicile='${m_domicile}', m_father_nationality='${m_father_nationality}',m_mother_nationality='${m_mother_nationality}' WHERE m_id = ${m_id}`;
        mysqlConnection.query(sql, function (err, result) {
            if (!err) {
                let sqlInsertJob_App = `INSERT INTO job_application(job_id, app_current_job, app_current_year, app_current_month, app_current_office, app_current_department, app_current_salary, app_current_position,app_current_phone, app_user, app_position, app_img, created_date, app_ability, jc_id) VALUES (${job_id},'${app_current_job}','${app_current_year}','${app_current_month}','${app_current_office}', '${app_current_department}','${app_current_salary}','${app_current_position}','${app_current_phone}',${app_user}, ${app_position},'${file}','${moment().add(543, 'year').format('YYYY-MM-DD HH:mm:s')}','${app_ability}', '${jc_id}')`;
                mysqlConnection.query(sqlInsertJob_App, function (err, result) {
                    if (!err) {
                        res.json({
                            status: 'success'
                        })
                    };
                    if (err) {
                        console.log(err);
                        res.json({
                            status: 'no_success'
                        })
                    };
                })
            };
            if (err) {
                console.log(err);
                res.json({
                    status: 'no_success'
                })
            };
        })
    } else {

        const { filename } = req.file
        let sql = `UPDATE member SET m_img='${filename}',m_idcard='${m_idcard}',m_prename='${m_prename}',m_firstname='${m_firstname}',m_lastname='${m_lastname}',m_race='${m_race}',m_nation='${m_nation}',m_religion='${m_religion}',m_blood='${m_blood}',m_birthday='${birthday}',m_relationship='${m_relationship}',m_idcard_province='${m_idcard_province}',m_house_no='${m_house_no}',m_moo='${m_moo}',m_alley='${m_alley}',m_road='${m_road}',m_subdistrict='${m_subdistrict}',m_district='${m_district}',m_province='${m_province}',m_zipcode='${m_zipcode}',m_phone='${m_phone}',m_fathername='${m_fathername}',m_father_occupation='${m_father_occupation}',m_mothername='${m_mothername}',m_mother_occupation='${m_mother_occupation}',updated_at='${moment().add(543, 'year').format('YYYY-MM-DD HH:mm:s')}',m_idcard_district='${m_idcard_district}', m_idcard_issuance_date='${Card_date}' , m_hometown='${m_hometown}', m_domicile='${m_domicile}', m_father_nationality='${m_father_nationality}',m_mother_nationality='${m_mother_nationality}' WHERE m_id = ${m_id}`;
        mysqlConnection.query(sql, function (err, result) {
            if (!err) {
                let sqlInsertJob_App = `INSERT INTO job_application(job_id, app_current_job, app_current_year, app_current_month, app_current_office, app_current_department, app_current_salary, app_current_position,app_current_phone, app_user, app_position, app_img, created_date, app_ability, jc_id) VALUES (${job_id},'${app_current_job}','${app_current_year}','${app_current_month}','${app_current_office}', '${app_current_department}','${app_current_salary}','${app_current_position}','${app_current_phone}',${app_user}, ${app_position},'${filename}','${moment().add(543, 'year').format('YYYY-MM-DD HH:mm:s')}','${app_ability}', '${jc_id}')`;
                mysqlConnection.query(sqlInsertJob_App, function (err, result) {
                    if (!err) {
                        console.log(result.insertId);
                        res.json({
                            status: 'success'
                        })
                    };
                    if (err) {
                        console.log(err);
                        res.json({
                            status: 'no_success'
                        })
                    };
                })
            };
            if (err) {
                console.log(err);
                res.json({
                    status: 'no_success'
                })
            };
        })
    }




}

const UpdateNumberDownload = (req, res) => {
    const { id } = req.params
    // console.log(job_id);
    let sqlSelect = `SELECT is_download FROM jobs WHERE job_id = ${id}`;
    mysqlConnection.query(sqlSelect, function (err, result) {
        if (!err) {
            let sql = `UPDATE jobs SET update_at='${moment().add(543, 'year').format('YYYY-MM-DD HH:mm:s')}',is_download='${result[0].is_download + 1}' WHERE job_id = ${id}`;
            mysqlConnection.query(sql, function (err, result) {
                if (!err) {

                };
                if (err) {

                };
            })
        };
        if (err) {
            res.json({
                status: 'no_success'
            })
        };
    })
}

const CheckUserRegisterJob = (req, res) => {
    const { jc_id, app_user } = req.body
    let sql = `SELECT *
    FROM job_calendar
    JOIN jobs ON job_calendar.jc_id = jobs.jc_id
    JOIN job_application ON jobs.job_id = job_application.job_id
    WHERE job_calendar.jc_id = ${jc_id}
    AND job_application.app_user = ${app_user}
    AND job_application.app_status != 99`;
    mysqlConnection.query(sql, function (err, result) {
        if (!err) {
            if (result.length == 0) {

                res.json({
                    status: true,
                })
            } else {
                console.log(result);
                res.json({
                    status: false
                })
            }
        };
        if (err) {

        };
    })

}
const ListUserRegisterJob = (req, res) => {
    // console.log(req);
    const { app_user } = req.body
    let sql = `SELECT
                job_application.*,
                jobs.job_position,
                jobs.job_payment,
                jobs.job_no,
                p_name,
                NAME,
                app_status,
                created_date,
                jobs.jc_id,
                p_id,
                p_type,
                job_calendar.jc_end
            FROM
                job_application
            INNER JOIN jobs ON jobs.job_id = job_application.job_id
            INNER JOIN job_calendar ON job_calendar.jc_id = job_application.jc_id
            INNER JOIN POSITION ON POSITION.p_id = job_application.app_position
            INNER JOIN type_position ON type_position.id = POSITION.p_type
            WHERE
                app_user = ${app_user}`;
    try {
        mysqlConnection.query(sql, function (err, result) {
            if (!err) {
                res.json(result);
            };
            if (err) {
                console.log(err);
            };
        })
    } catch (error) {
        console.log(error);
    }
}
const GetEducation = (req, res) => {
    let sql = `SELECT * FROM education_level ORDER BY education_level.edu_id ASC`;
    mysqlConnection.query(sql, function (err, result) {
        if (!err) {
            res.json(result);
        };
        if (err) {
            console.log(err);
        };
    })
}

const GetJobByID = (req, res) => {
    const { id } = req.params;
    let sql = `SELECT * FROM jobs WHERE job_id =${id} AND is_active = 1`;
    mysqlConnection.query(sql, function (err, result) {
        if (!err) {
            res.json(result);
        };
        if (err) {
            console.log(err);
        };
    })
}



module.exports = {
    Detail_Me,
    UpdateDataDetail,
    User_is_Accept,
    UpdateNumberDownload,
    registerJob,
    CheckUserRegisterJob,
    ListUserRegisterJob,
    GetEducation,
    GetJobByID
}
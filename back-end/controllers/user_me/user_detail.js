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
            result[0].m_img = baseURL_IMG + result[0].m_img
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
    const { id } = req.params
    const { m_idcard, m_prename, m_firstname, m_lastname, m_birthday, m_blood, m_race, m_nation, m_religion, m_relationship, m_idcard_province, m_idcard_district, m_idcard_issuance_date, m_spouse, spouse_nation, spouse_occupation, m_house_no, m_moo, m_alley, m_road, m_province, m_district, m_subdistrict, m_zipcode, m_telephone, m_phone, m_fathername, m_father_nationality, m_father_occupation, m_mothername, m_mother_nationality, m_mother_occupation, m_hometown, m_domicile, m_img } = req.body

    if (!req.file) {
        let sql = `UPDATE member SET m_idcard = '1509966051566', m_prename = '1', m_firstname = 'asdasd', m_lastname = 'asdasd', m_birthday = '1998-02-04', m_blood = '3', m_race = 'ไทย', m_nation = 'ไทย', m_religion = '1', m_relationship = '1', m_idcard_province = '50', m_idcard_district = '5001', m_idcard_issuance_date = '2007-03-01', m_spouse = NULL, spouse_nation = NULL, spouse_occupation = NULL, m_house_no = '99', m_moo = '99', m_alley = '-', m_road = 'เชียงใหม่-ลำพูน', m_province = '10', m_district = '1001', m_subdistrict = '100101', m_zipcode = '10200', m_telephone = '080-770859', m_phone = '080-7708593', m_fathername = 'เทสระบบ', m_father_nationality = 'เทสระบบ', m_father_occupation = 'เทสระบบ', m_mothername = 'เทสระบบ', m_mother_nationality = 'เทสระบบ', m_mother_occupation = 'เทสระบบ', m_hometown = '50', m_domicile = '50', m_img =${req.file.filename}  WHERE m_id = ${id}`;
    }

}


module.exports = {
    Detail_Me,
    UpdateDataDetail,
    User_is_Accept
}
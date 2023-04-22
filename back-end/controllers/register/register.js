
const { mysqlConnection } = require('../../Config/DB')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const moment = require('moment');
var baseURL_IMG = 'http://localhost:9500/public/img/';
var baseURL_PDF = 'http://localhost:9500/public/pdf/';

const register = async (req, res) => {
    const { m_username, m_password, m_idcard, m_email, m_phone, m_firstname, m_lastname, m_house_no, m_moo, m_province, m_district, m_subdis, m_zipcode, m_birthday } = req.body.data;
    const HashPassword = await bcrypt.hash(m_password, 10);
    let sql = `INSERT INTO member (m_username, m_password, m_idcard, m_email, m_phone, m_firstname, m_lastname, m_house_no, m_moo, m_province, m_district, m_subdistrict, m_zipcode, m_birthday, m_active ,create_at) VALUES('${m_username}', '${HashPassword}', '${m_idcard}', '${m_email}', '${m_phone}', '${m_firstname}', '${m_lastname}', '${m_house_no}', '${m_moo}', ${m_province}, ${m_district}, ${m_subdis}, '${m_zipcode}', '${m_birthday}', '1','${moment().add('year', 543).format()}')`;
    mysqlConnection.query(sql, function (err, result) {
        if (!err) res.json({
            text: "Insert successfully",
            status: "success"
        });
        if (err) console.log(err);
    })
}


module.exports = {
    register
}

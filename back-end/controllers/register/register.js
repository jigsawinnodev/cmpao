
const { mysqlConnection } = require('../../Config/DB')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const moment = require('moment');
var baseURL_IMG = 'http://localhost:9500/public/img/';
var baseURL_PDF = 'http://localhost:9500/public/pdf/';

const register = async (req, res) => {
    const { m_username, m_password, m_idcard, m_email, m_phone, m_firstname, m_lastname, m_house_no, m_moo, m_province, m_district, m_subdis, m_zipcode, m_birthday } = req.body.data;

    let sql = `SELECT * FROM member WHERE m_username = '${m_username}'`
    mysqlConnection.query(sql, async function (err, result) {
        if (!err) {
            if (result.length >= 1) {
                res.json({
                    status: "username_already"
                })
            } else {
                const HashPassword = await bcrypt.hash(m_password, 10);
                let sql = `INSERT INTO member (m_username, m_password, m_idcard, m_email, m_phone, m_firstname, m_lastname, m_house_no, m_moo, m_province, m_district, m_subdistrict, m_zipcode, m_birthday, m_active ,create_at) VALUES('${m_username}', '${HashPassword}', '${m_idcard}', '${m_email}', '${m_phone}', '${m_firstname}', '${m_lastname}', '${m_house_no}', '${m_moo}', ${m_province}, ${m_district}, ${m_subdis}, '${m_zipcode}', '${m_birthday}', '1','${moment().add(543, 'year').format()}')`;
                mysqlConnection.query(sql, function (err, result) {
                    if (!err) res.json({
                        text: "Insert successfully",
                        status: "success"
                    });
                    if (err) console.log(err);
                })
            }
        }
        if (err) console.log(err);
    })

}

module.exports = {
    register
}

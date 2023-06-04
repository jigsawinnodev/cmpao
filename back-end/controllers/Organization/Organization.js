const { mysqlConnection } = require('../../Config/DB')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const moment = require('moment');
moment.locale()

const GetAllOrganization = (req, res) => {
    let sql = 'SELECT * FROM organization ORDER BY org_id ASC';
    mysqlConnection.query(sql, function (err, result) {
        if (!err) {
            res.json(result)
        };
        if (err) console.log(err);
    })
}

module.exports = {
    GetAllOrganization
}
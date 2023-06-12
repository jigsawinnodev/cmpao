const { mysqlConnection } = require('../../Config/DB')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const moment = require('moment');
moment.locale()

const GetAllOrganization = (req, res) => {
    let sql = "SELECT org_id, org_name, org_active, org_parent FROM organization WHERE is_active = 1 ORDER BY org_id ASC";
    mysqlConnection.query(sql, function (err, result) {
        if (!err) {
            let makeTree = (org, org_parent) => {
                let node = {};
                org
                    .filter(n => n.org_parent === org_parent)
                    .forEach(n => node[n.org_id] = {
                        data: n,
                        children: makeTree(org, n.org_id)
                    });
                return node;
            }
            let data = makeTree(result, null);
            res.json(data)
        } else {
            console.log(err);
        }
    })
}
const DeleteTree = (req, res) => {
    const { id } = req.params
    let sql = `UPDATE organization SET is_active = 0 ,update_at = '${moment().format('YYYY-MM-DD hh:mm:ss')}' WHERE org_id =  ${id}`;
    mysqlConnection.query(sql, function (err, result) {
        if (!err) {
            res.json("success")
        } else {
            console.log(err);
        }
    })
}
const InsertTreeOrUpdate = (req, res) => {
    const { org_id, org_name, org_active, org_parent } = req.body;
    // console.log(req.body);
    if (org_id == "") {
        let sql = `INSERT INTO organization(org_name, org_active, org_parent, create_at) VALUES ('${org_name}', ${org_active}, ${org_parent}, '${moment().format('YYYY-MM-DD hh:mm:ss')}')`;
        mysqlConnection.query(sql, function (err, result) {
            if (!err) {
                res.json("success")
            } else {
                console.log(err);
            }
        })
    } else {
        console.log('test');
        let sql = `UPDATE organization SET org_name = '${org_name}', org_active = '${org_active}' ,update_at = '${moment().format('YYYY-MM-DD hh:mm:ss')}'  WHERE org_id = ${org_id} `;
        mysqlConnection.query(sql, function (err, result) {
            if (!err) {
                res.json("update")
            } else {
            }
        })
    }
}

module.exports = {
    GetAllOrganization,
    InsertTreeOrUpdate,
    DeleteTree
}
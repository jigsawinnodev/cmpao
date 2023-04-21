const { mysqlConnection } = require('../../Config/DB')

const GetType_position = (req, res) => {
    let sql = "SELECT * FROM type_position WHERE status = 1";
    mysqlConnection.query(sql, function (err, result) {
        res.json(result)
    })
}
const Edit_position = (req, res) => {
    const { id, name } = req.body.data;
    console.log(id, name);
    if (!id) {
        let sql = `INSERT INTO type_position (name) VALUES ('${name}')`;
        mysqlConnection.query(sql, function (err, result) {
            if (!err) {
                console.log("insert");
                res.json(result)
            };
            if (err) console.log(err);
        })
    } else {
        let sql = `UPDATE type_position SET name = '${name}' WHERE id = ${id}`;
        mysqlConnection.query(sql, function (err, result) {
            if (!err) res.json(result);
            if (err) console.log(err);
        })
    }
}

const DeleteType_position = (req, res) => {
    const { id } = req.params
    console.log(id);
    let sql = `UPDATE type_position SET status = 0 WHERE id = ${id}`;
    mysqlConnection.query(sql, function (err, result) {
        if (!err) res.json(result);
        if (err) console.log(err);
    })
}


module.exports = {
    GetType_position,
    Edit_position,
    DeleteType_position
}
const { mysqlConnection } = require('../Config/DB')
const GetMenuAdmin = (req, res) => {
    let sql = "SELECT * FROM admin_menu";
    mysqlConnection.query(sql, function (err, result) {
        res.json(result)
    })
}
const GetType_position = (req, res) => {
    let sql = "SELECT * FROM type_position";
    mysqlConnection.query(sql, function (err, result) {
        res.json(result)
    })
}
module.exports = {
    GetMenuAdmin,
    GetType_position
}
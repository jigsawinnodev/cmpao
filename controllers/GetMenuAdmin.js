const { mysqlConnection } = require('../Config/DB')
const GetMenuAdmin = (req, res) => {
    let sql = "SELECT * FROM admin_menu";
    mysqlConnection.query(sql, function (err, result) {
        res.json(result)
    })
}
module.exports = {
    GetMenuAdmin
}
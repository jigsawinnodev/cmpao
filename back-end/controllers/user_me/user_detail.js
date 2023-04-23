const { mysqlConnection } = require('../../Config/DB')


const Detail_Me = (req, res) => {
    // console.log(req.user);
    const { username } = req.user
    let sql = `SELECT * FROM member WHERE m_username = '${username}'`
    mysqlConnection.query(sql, function (err, result) {
        if (!err) {
            const { m_password, ...payload } = result[0]
            // console.log(payload);
            res.json({
                data: payload,
                status: true
            })
        };
        if (err) console.log(err);
    })
}


module.exports = {
    Detail_Me
}
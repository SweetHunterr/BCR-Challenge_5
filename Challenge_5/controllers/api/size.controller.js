const db = require("../../models")
const tbl_size = db.tbl_size

async function getAllSize(req, res) {
    try {
        let sizes = await tbl_size.findAll()

        res.status(200).json({
            message: "success",
            data: sizes
        })
    } catch (e) {
        console.log(e)
    }
}

module.exports = getAllSize
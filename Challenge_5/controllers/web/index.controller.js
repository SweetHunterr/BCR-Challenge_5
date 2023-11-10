const {default: axios} = require("axios")

function index(req, res){
    axios.get("http://localhost:3000/api/cars").then(
        (response) => res.render('../views/index.ejs', {Cars: response.data.data})
    )
}

module.exports = index
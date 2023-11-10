const {default: axios} = require("axios")
const { response } = require("express")

function addCars(req, res){
    axios.get("http://localhost:3000/api/size").then(
        (response) => res.render("addcars", {size: response.data.data})
    )
}

module.exports = addCars
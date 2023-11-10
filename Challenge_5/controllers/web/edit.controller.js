const {default: axios} = require("axios")

function editCars(req,res){
    axios.get(`http://localhost:3000/api/car/${req.params.id}`).then(
        (response) => axios.get("http://localhost:3000/api/size").then(
            (responseSize) => res.render("editcars", {car: response.data.data, size: responseSize.data.data})
        )
    )
}

module.exports = editCars
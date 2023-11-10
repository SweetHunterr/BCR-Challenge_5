const db = require("../../models")
const tbl_cars = db.tbl_cars

async function getAllCars(req, res) {
    try {
        let cars = await tbl_cars.findAll()

        res.status(200).json({
            message: "This is All Data",
            data: cars
        })
    } catch (e) {
        console.log(e)
    }
}

async function getOneCar(req, res) {
    try {
        let car = await tbl_cars.findOne({
            where: { id: req.params.id }
        })

        res.status(200).json({
            message: "Just Get One Car",
            data: car
        })
    } catch (e) {
        console.log(e)
    }
}

async function createCars(req, res) {
    let car = {
        name: req.body.name,
        harga: req.body.harga,
        url_image: req.body.url_image,
        id_size: req.body.id_size,
        createdAt: new Date(),
        updatedAt: new Date()
    }

    try {
        tbl_cars.create(car).then(
            res.redirect("/")
        )
    } catch (e) {
        console.log(e)
    }
}

async function editCars(req, res) {
    const query = {
        where: { id: req.params.id }
    }

    let update = new Date()

    const params = {
        name: req.body.name,
        harga: req.body.harga,
        url_image: req.body.url_image,
        id_size: req.body.id_size,
        updatedAt: update
    }

    try {
        tbl_cars.update(params, query).then(
            res.redirect("/")
        )
    } catch (e) {
        console.log(e)
    }
}

async function deleteCars(req, res) {
    const query = {
        where: { id: req.params.id }
    }

    try {
        tbl_cars.destroy(query).then(
            res.status(200).json({
                message: "Data was deleted"
            })
        )
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    getAllCars,
    createCars,
    getOneCar,
    editCars,
    deleteCars
}
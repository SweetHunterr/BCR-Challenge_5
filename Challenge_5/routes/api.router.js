const express = require("express")
const getAllSize = require("../controllers/api/size.controller")
const {getAllCars, createCars, getOneCar, editCars, deleteCars} = require("../controllers/api/cars.controller")
const router = express.Router()

router.get("/size", getAllSize)
router.get("/cars", getAllCars)
router.get("/car/:id", getOneCar)
router.post("/addCar", createCars)
router.post("/editCar/:id", editCars)
router.delete("/deleteCar/:id", deleteCars)

module.exports = router
const express = require("express")
const indexController = require("../controllers/web/index.controller")
const addCarsController = require("../controllers/web/add.controller")
const editCarsController = require("../controllers/web/edit.controller")
const router = express.Router()

router.get('/', indexController)

router.get('/addcars', addCarsController)

router.get("/editCars/:id", editCarsController)

module.exports = router
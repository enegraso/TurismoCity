const { Router } = require('express');
const flightsRoutes = require('./flights.js');
const airportsRoutes = require('./airports')
const usersRoutes = require('./user')
const favoriteRouter = require('./favorites')
const feedbackRouter = require('./feedback')
const activyRoutes = require('./activities')
const suppliersRoutes = require('./suppliers')
const checkout = require("./checkout")
const purchaseRoutes = require('./purchase')
//Agrego de constante para Agenda
const schedulerRoutes = require('./scheduler')
//Agrego lista de deseos
const whishesRoutes = require('./whishes')
//Agrego rutas de emailes
const emailSendRoutes = require('./sendemails')

const router = Router();
//const {FeedBack} = require('../models/index')

// router.use('/flights', flightsRoutes.getAll)
//const apiRecipe = axios.get(`https://api.flightapi.io/roundtrip/${KEY_API}/${salida}/${llegada}/${fechaSalida}/${fechaRegreso}/${numAdultos}/${numNinios}/${numBebes}/${claseCabina}/${moneda}`)

// router.use('/flights', flightsRoutes)

// router.use(usersRoutes)

router.use('/allAirports', airportsRoutes)
router.use('/user', usersRoutes)
router.use('/favorites', favoriteRouter)
router.use('/feedBack', feedbackRouter)
router.use('/activity', activyRoutes)
router.use('/suppliers', suppliersRoutes)
router.use("/checkout", checkout)
router.use('/purchase', purchaseRoutes)
// Rutas de scheduler
router.use(schedulerRoutes)
// Rutas de deseos
router.use(whishesRoutes)
// Rutas de emails
router.use(emailSendRoutes)

module.exports = router;

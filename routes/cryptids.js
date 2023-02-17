const router = require('express').Router()
const cryptidsCtrl = require('../controllers/cryptids.js')

router.post('/', cryptidsCtrl.create)

module.exports = router
const router = require('express').Router()
const cryptidsCtrl = require('../controllers/cryptids.js')

router.post('/', cryptidsCtrl.create)
router.get('/', cryptidsCtrl.index)
router.put('/:id', cryptidsCtrl.update)
router.delete('/:id', cryptidsCtrl.delete)

module.exports = router
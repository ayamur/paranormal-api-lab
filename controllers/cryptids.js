const { Cryptid } = require('../models')

const create = async (req, res) => {
  try {
    const cryptid = await Cryptid.create(req.body)
    res.status(200).json(cryptid)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create
}
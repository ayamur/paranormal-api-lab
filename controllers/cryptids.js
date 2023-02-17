const { Cryptid } = require('../models')

const create = async (req, res) => {
  try {
    const cryptid = await Cryptid.create(req.body)
    console.log(cryptid.toJSON())
    res.status(200).json(cryptid)
  } catch (error) {
    res.status(500).json(error)
  }
}

const index = async (req, res) => {
  try {
    const cryptids = await Cryptid.findAll()
    res.status(200).json(cryptids)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
  index,
}

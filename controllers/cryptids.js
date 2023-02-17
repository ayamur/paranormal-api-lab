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
    const cryptid = await Cryptid.findAll()
    res.status(200).json(cryptid)
  } catch (error) {
    res.status(500).json(error)
  }
}

const update = async (req, res) => {
  try {
    const cryptid = await Cryptid.update(
      req.body,
      { where: { id: req.params.id }, returning: true }
    )
    res.status(200).json(cryptid)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
  index,
  update,
}

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

//!OR BELOW ALSO LOCATES
/*
const update = async (req, res) => {
  try {
    // We can also update at the instance level.
    // Several fields can be updated at once with the set method,
    // but we will need to save() the instance afterwards.

    const cat = await Cat.findByPk(req.params.id)
    cat.set(req.body)
    await cat.save()

    res.status(200).json(cat)
  } catch (error) {
    res.status(500).json(error)
  }
}
*/

module.exports = {
  create,
  index,
  update,
}

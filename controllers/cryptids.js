const { Cryptid, Sighting } = require('../models')

const create = async (req, res) => {
  try {
    const cryptid = await Cryptid.create(req.body)
    console.log(cryptid.toJSON())
    res.status(200).json(cryptid)
  } catch (error) {
    res.status(500).json(error)
  }
}
//! Previous Index Code
// const index = async (req, res) => {
//   try {
//     const cryptid = await Cryptid.findAll()
//     res.status(200).json(cryptid)
//   } catch (error) {
//     res.status(500).json(error)
//   }
// }
//! Refactored Index Code below to include sightings model

const index = async (req, res) => {
  try {
    const cryptids = await Cryptid.findAll({
      include: [{ model: Sighting, as: "sightings" }],
    })
    res.status(200).json(cryptids)
  } catch (error) {
    console.log(error)
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

    const cat = await Cryptid.findByPk(req.params.id)
    cryptid.set(req.body)
    await cryptid.save()

    res.status(200).json(cryptid)
  } catch (error) {
    res.status(500).json(error)
  }
}
*/

const deleteCryptid = async (req, res) => {
  try {
    // Calling destroy on the model will not return the deleted record!
    const numberOfRowsRemoved = await Cryptid.destroy(
      { where: { id: req.params.id } }
    )
    res.status(200).json(numberOfRowsRemoved) // Expected: 1
  } catch (error) {
    res.status(500).json(error)
  }
}

//! OR THIS OPTION
/*
const deleteCryptid = async (req, res) => {
  try {
    // We can also call destroy on an instance:
    const cryptid = await Cryptid.findByPk(req.params.id)
    await cryptid.destroy()
    res.status(200).json(cryptid)
  } catch (error) {
    res.status(500).json(error)
  }
}
*/

const addSighting = async (req, res) => {
  try {
    // Append a catId to req.body:
    req.body.cryptidId = req.params.id
    const sighting = await Sighting.create(req.body)
    res.status(200).json(sighting)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
  index,
  update,
  delete: deleteCryptid,
  addSighting,
}

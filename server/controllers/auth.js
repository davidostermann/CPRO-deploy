const express = require('express')
const user = require('../models/user')
const { generateToken } = require('../auth/token')

const ctrl = {}

ctrl.register = (req, res) => {
  const { lastname, firstname, email, password } = req.body
  if (!email) {
    return res.status(422).send({ error: 'You must enter an email address' })
  }

  if (!password) {
    return res.status(422).send({ error: 'You must enter a password' })
  }

  return user
    .notExists(email)
    .then(exist => user.createUser({ lastname, firstname, email, password }))
    .then(result => user.getByEmail(email))
    .then(result => res.send(result))
    .catch(error => res.status(422).send({ error }))
}

ctrl.login = (req, res) => {
  // Grâce au middleware authCredentials, on récupere le user
  const userInfo = {
    id: req.user.id,
    email: req.user.email,
    role: req.user.role
  }

  res.status(200).json({
    token: 'JWT ' + generateToken(userInfo),
    user: userInfo
  })
}

module.exports = ctrl
    const User = require('../models/user')
    const hashGenerator = require('../helper/hashGenerate')
    const jwt = require('jsonwebtoken')
    const bcrypt = require('bcryptjs');
    const axios = require('axios')
    require('dotenv').config()


    module.exports = {
        signIn: (req, res) => {
            if (req.body.email) {
                User.findOne({
                        email: req.body.email
                    })
                    .then(foundUser => {
                        let isTrue = bcrypt.compareSync(req.body.password, foundUser.password);
                        if (isTrue) {
                            jwt.sign({
                                id: foundUser._id
                            }, process.env.JWT_SECRET, function (err, token) {
                                if (err) {
                                    res.status(401).json({
                                        err,
                                        message: 'wrong password'
                                    })
                                } else {
                                    res.status(200).json({
                                        id: foundUser._id,
                                        token,
                                        foundUser
                                    })
                                }
                            })
                        } else {
                            res.status(401).json({
                                err,
                                message: 'wrong password'
                            })
                        }
                    })
                    .catch(err => {
                        res.status(400).json({
                            err,
                            message: 'wrong username/password'
                        })
                    })

            }

        },

        signUp: (req, res) => {
            if (req.body.password.length >= 6) {
                User.create({
                        username: req.body.username,
                        email: req.body.email,
                        password: hashGenerator(req.body.password)
                    })
                    .then(createdUser => {
                        res.status(201).json(createdUser)
                    })
                    .catch(err => {
                        res.status(400).json(err)
                    })
            } else {
                res.status(400).json({
                    msg: 'password length minimun 6 character'
                })
            }

        },
        authenticationUser: function (req, res) {
            if (req.user.id) {
                User.findOne({
                        _id: req.user.id
                    })
                    .then((result) => {
                        res.status(200).json(result)
                    }).catch((err) => {
                        res.status(400).json(err)
                    });
            } else {
                res.status(200).json(false)
            }
        },


    }
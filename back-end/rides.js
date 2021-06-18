const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();

const multer = require('multer')
const upload = multer({
  dest: '../front-end/public/rides/',
  limits: {
    fileSize: 50000000
  }
});

const users = require("./users.js");
const User = users.model;
const validUser = users.valid;

const rideSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    },
    path: String,
    title: String,
    description: String,
    created: {
      type: Date,
      default: Date.now
    },
  });
  
  const Ride = mongoose.model('Ride', rideSchema);
  

router.post("/", validUser, upload.single('ride'), async (req, res) => {
    if (!req.file)
      return res.status(400).send({
        message: "Must upload a file."
      });
  
    const ride = new ride({
      user: req.user,
      title: req.body.title,
      description: req.body.description,
    });
    try {
      await ride.save();
      return res.sendStatus(200);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  });
  
router.get("/", validUser, async (req, res) => {
    try {
      let rides = await Ride.find({
        user: req.user
      }).sort({
        created: -1
      }).populate('user');
      return res.send(rides);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  });

router.get("/all", async (req, res) => {
    try {
      let rides = await Ride.find().sort({
        created: -1
      }).populate('user');
      return res.send(rides);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  });  
  
  module.exports = {
    model: Ride,
    routes: router,
  }
  
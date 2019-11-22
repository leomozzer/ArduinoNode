const express = require('express');
const routes = express.Router();

const Jonny = require('./components/johnny-five/johnny');

//GET
routes.get('/arduino/start', Jonny.StartArduino);

//POST
routes.get('/arduino/room/:roomName', Jonny.ControlArduino);
routes.get('/devices/:deviceType/:deviceId/', Jonny.ControlDevice)
// 
module.exports = routes;
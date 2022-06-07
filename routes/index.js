const express=require('express');

const routes = express.Router();
const HomeController=require('../controllers/home_controller');

routes.get('/', HomeController.home);
console.log("Router is UP");

module.exports =routes;
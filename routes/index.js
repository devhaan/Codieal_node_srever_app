const express=require('express');

const routes = express.Router();
const HomeController=require('../controllers/home_controller');

routes.get('/', HomeController.home);
//to route it for same /routerName with further branches
routes.use('/users',require('./users'));


console.log("Router is UP");

module.exports =routes;
const express=require('express');

const routes = express.Router();
const UserController=require('../controllers/users_controller');

routes.get('/profile',UserController.profile);
routes.get('/post',UserController.post);
routes.get('/signup',UserController.signUp);
routes.get('/signin',UserController.signIn);
module.exports =routes;
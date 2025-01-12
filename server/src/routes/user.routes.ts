import { Router } from "express";
import * as userController from './../controllers/user.controller'

const userRouter = Router();

//signup 
userRouter.post('/signup', userController.createUser)

//login
userRouter.post('/login', userController.loginUser)

//share link


//get shared brain


export default userRouter;
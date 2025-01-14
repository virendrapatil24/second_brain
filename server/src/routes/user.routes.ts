import { Router } from "express";
import * as userController from './../controllers/user.controller'
import { isAuthenticated } from "../utils/authentication";

const userRouter = Router();

//signup 
userRouter.post('/signup', userController.createUser)

//login
userRouter.post('/login', userController.loginUser)

//share link
userRouter.post('/brain/share', isAuthenticated, userController.shareBrainLink)

//get shared brain
userRouter.get('/brain/shareLink', isAuthenticated, userController.getSharedBrain)

export default userRouter;
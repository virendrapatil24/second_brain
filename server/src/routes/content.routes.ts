import { Router } from "express";
import { isAuthenticated } from "../utils/authentication";
import * as contentController from "./../controllers/content.controller"

const contentRouter = Router();

//get content
contentRouter.get("/", isAuthenticated, contentController.getContent)

//create content
contentRouter.post("/", isAuthenticated, contentController.createContent)

//update content
contentRouter.put("/", isAuthenticated, contentController.updateContent)

//delete content
contentRouter.delete("/", isAuthenticated, contentController.deleteContent)

export default contentRouter;
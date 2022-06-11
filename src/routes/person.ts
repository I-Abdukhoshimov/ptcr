import {Router } from "express";
import { PersonController } from "../controllers/person";


//router
const router  = Router({mergeParams:true})
const  controller = new PersonController()



// new comment
router.route("/").get(controller.getAll).post(controller.create)
router
    .route("/:id")
    .get(controller.getById)
    .delete(controller.delete)

export default router 

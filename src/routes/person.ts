import {Router } from "express";
import { PersonController } from "../controllers/person";

const router  = Router({mergeParams:true})
const  controller = new PersonController()

router.route("/").get(controller.getAll).post(controller.create)
router
    .route("/:id")
    .delete(controller.delete)
    .post(controller.create)

export default router 

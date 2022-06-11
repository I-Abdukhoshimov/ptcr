import {Router } from "express";
import { AdminController } from "../controllers/admin";

const router  = Router({mergeParams:true})
const  controller = new AdminController()


router.route("/").get(controller.getAll).post(controller.create)
router
    .route("/:id")
    .get(controller.getAll)

export default router 
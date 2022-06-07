import {Router } from "express";
import { AdminController } from "../controllers/admin";

const router  = Router({mergeParams:true})
const  controller = new AdminController()


router.route("/").get(controller.getAll)
router
    .route("/:id")


export default router 
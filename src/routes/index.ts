import { Router } from "express";
import multer from "multer";
import PersonRouter from "./person"
import AdminRouter from "./admin"
import path from "path"

const router = Router({mergeParams:true})


router.use("/person", PersonRouter)
router.use("/admin", AdminRouter)

export default router
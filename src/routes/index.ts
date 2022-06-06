import { Router } from "express";
import multer from "multer";
import PersonRouter from "./person"
import AdminRouter from "./admin"
import path from "path"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../', 'assets/'))
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + '.' + "jpeg")
    }
})

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024
    },
    fileFilter: function (req, file, callback) {
        var ext = path.extname(file.originalname);
        if ( ext!==".jpg" && ext!=='.jpeg' && ext !== ".png") {
            return callback(new Error('Only images are allowed'))
        }
        callback(null, true)
    },
})

const storagee = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../', 'asset/'))
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + '.' + "docx")
    }
})

const uploadd = multer({
    storage: storagee,
    limits: {
        fileSize: 5 * 1024 * 1024
    },
    fileFilter: function (req, file, callback) {
        var ext = path.extname(file.originalname);
        if (ext !== '.pdf' && ext !== '.docx' && ext !== '.docx') {
            return callback(new Error('Only docx are allowed'))
        }
        callback(null, true)
    },
})

const router = Router({mergeParams:true})

// router.use("/teachers", upload.single("photo"),TeacherRouter)
router.use("/person", PersonRouter)
// router.use("/abiturent", uploadd.single('docx'),AbiturentRouter)
// router.use("/gallery", upload.single("photo"),GalleryRouter)
router.use("/admin", AdminRouter)

export default router
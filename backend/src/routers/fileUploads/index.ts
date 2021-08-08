import express, {Request, Response} from 'express';
import path from "path";

const uploadRouter = express.Router();
const multer = require('multer')

const storage = multer.diskStorage({
    destination: './public/uploads/images',
    filename: function (req: Request, file: any, cb: any) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

function checkFileType(file: any, cb: any) {
    const fileTypes = /jpeg|jpg|png|gif/;
    const extName = fileTypes.test(path.extname(file.originalname).toLowerCase())
    const mimeType = fileTypes.test(file.mimetype);
    if (mimeType && extName) {
        return cb(null, true)
    }
    cb({
        message: "Only images allowed"
    })
}

const upload = multer({
    storage: storage,
    limits: {fileSize: 1000000000},
    fileFilter: function (req: any, file: any, cb: any) {
        checkFileType(file, cb)
    }
}).single('file') // this should same in input name and postman

interface MulterRequest extends Request {
    file: any;
}

uploadRouter.post('/', function (req: Request, res: Response) {
    upload(req, res, (err: any) => {
        if (err) {
            res.send({
                'error': err.message
            })
            return
        }
        if ((req as MulterRequest).file == undefined) {
            res.send({
                error: "No file selected"
            })
        }
        // console.log((req as MulterRequest).file)
        res.send({
            message: 'File uploaded',
            path: `${req.get('host')}/uploads/images/${(req as MulterRequest).file.filename}`
        })
    })
})

module.exports = uploadRouter
import express from 'express';

const router = express.Router();
const imageUploadRouter = require('./fileUploads')

router.use('/upload', imageUploadRouter)

module.exports = router;
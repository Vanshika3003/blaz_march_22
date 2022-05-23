import "dotenv/config.js";
import express from 'express';
import cors from 'cors';
import multer from 'multer';
import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

const PORT = process.env.PORT || 550;

// create an instance
const instance = express();
// Add JSON Middleware in HTTP Pipeline
instance.use(express.json());
// do not parse incoming data other than HTTP Request Message Body
instance.use(express.urlencoded({ extended: false }));
// configure CORS
instance.use(cors({
    origin: "*",
    methods: "*",
    allowedHeaders: "*"
}));

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ID,
    secretAccessKey: process.env.AWS_SECRET
})
const storage = multer.memoryStorage({
    destination: function (req, file, cb) {
        cb(null, '')
    },

})

const upload = multer({ storage }).single('image');

instance.post('/upload', upload, (req, res) => {
    let myFile = req.file.originalname.split(".")
    const fileType = myFile[myFile.length - 1]



    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `${uuidv4()}.${fileType}`,
        Body: req.file.buffer
    }

    s3.upload(params, (error, data) => {
        if (error) {
            res.status(500).send(error)
        }

        res.status(200).send(data)
    })

})




// start listening
instance.listen(PORT, () => {
    console.log(`Started on port ${PORT}`);
});

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
let awsConfig = {
    "region": "us-east-1",
    "endpoint": "http://dynamodb.us-east-1.amazonaws.com",
    "accessKeyId": "", "secretAccessKey": ""
};
AWS.config.update(awsConfig);

const dynamodb = new AWS.DynamoDB.DocumentClient();
const dynamodbTableName = 'processDepartment';

// instance.get('/upload', upload, (req, res) => {
//     async function getUser() {
//         const params = {
//             TableName: dynamodbTableName,
//             Key: {
//                 'dept_no': "109"
//             }
//         }
//         return await dynamodb.get(params).promise().then((response) => {
//             return buildResponse(200, response.Item);
//         }, (error) => {
//             console.error('Do your custom error handling here. I am just gonna log it: ', error);
//         });
//     }
// })
instance.get("/get-data", (req, resp) => {
    // read URL Parameter
    const params = {
        TableName: dynamodbTableName,
        Key: {
            'dept_no': "109"
        }
    }
    if (!params.Key.dept_no) {
        response.status(500).send({
            message: 'Invalid Parameter Value'
        });
    } else {
        return dynamodb.get(params).promise().then((response) => {
            console.log("res", response);
            //  response.status(200).send(response.Item)
            return response.Item;
        }
        )
    }


});



// start listening
instance.listen(PORT, () => {
    console.log(`Started on port ${PORT}`);
});
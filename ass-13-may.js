import "dotenv/config.js";
import express from 'express';
import cors from 'cors';
import multer from 'multer';
import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';
import { Consumer } from 'sqs-consumer';

const PORT = process.env.PORT || 100;

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

let docClient = new AWS.DynamoDB.DocumentClient();
let qurl = 'https://sqs.us-east-1.amazonaws.com/246585234720/departmentQueue'
const sqs = new AWS.SQS({ apiVersion: '2012-11-05' });


instance.post('/add-data', (req, res) => {
    let order = req.body;

    // var input = {
    //     "dept_no": 3,
    //     "deptname": "Madhu",
    //     "location": "Pune",
    //     "capacity": 23444,
    // };
    var params = {
        TableName: "departments",
        Item: req.body
    };
    res.status(200).send({
        message: 'Data is pushed successfully',
    });
    docClient.put(params, function (err, data) {
        if (err) {
            console.log("users::save::error - " + JSON.stringify(err, null, 2));
        } else {
            console.log("users::save::success");
        }

    });
    console.log("orderrr", req.body);
    let qmessage = sqs.sendMessage({
        MessageAttributes: {
            "DeptNo": { DataType: "String", StringValue: order.dept_no },
            "DeptName": { DataType: "String", StringValue: order.deptname },
            "Location": { DataType: "String", StringValue: order.location },
            "Capacity": { DataType: "String", StringValue: order.capacity },
        },
        MessageBody: JSON.stringify(order),
        QueueUrl: qurl
    }).promise(); // Async Execution

    qmessage.then((data) => {
        console.log(`Data is Successfully Send ${data.MessageId}`);
        res.status(200).send({ message: `Data is Successfully Send ${data.MessageId}` });
    }).catch();
})




// start listening
instance.listen(PORT, () => {
    console.log(`Started on port ${PORT}`);
});
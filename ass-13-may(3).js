import AWS from 'aws-sdk';
// The Object that will consume the message from the queue 
import { Consumer } from 'sqs-consumer';



AWS.config.update({
    secretAccessKey: '',
    accessKeyId: '',
    region: 'us-east-1'

});
let awsConfig = {
    "region": "us-east-1",
    "endpoint": "http://dynamodb.us-east-1.amazonaws.com",
    "accessKeyId": "", "secretAccessKey": ""
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

const qurl = 'https://sqs.us-east-1.amazonaws.com/246585234720/departmentQueue';
// create an instance of SQS
const sqs = new AWS.SQS({ apiVersion: '2012-11-05' });

// create a consumer object for the queue
const saveIntoProcessOrderDb = (data) => {
    var params = {
        TableName: "processDepartment",
        Item: JSON.parse(data)
    };
    //Object.entries(order).map((ord)=>{
    docClient.put(params, function (error, data) {
        if (error) {
            console.log(`Error in Writing data in table ${error.message}`);
            return
        }
        console.log(`Data is Added into the Table  Successfully ${data.ConsumedCapacity}`);
    })
}
const consumer = Consumer.create({
    queueUrl: qurl,
    sqs: sqs, // subscribe to SQS to read message from
    batchSize: 10, // number of message can be read in one batch
    // implicitly subscribe to 'message_received' event
    handleMessage: async (message) => {
        // read and process message e.g. saving in database
        console.log('====================================', message.Body);
        //console.log(`Received Message = ${JSON.stringify(message.Body)}`);
        let text = message.Body;
        saveIntoProcessOrderDb(text);


        // var params = {
        //     TableName: "processDepartment",
        //     Item: {
        //         "dept_no": {
        //             "S": "" + (message.Body.dept_no)
        //         },
        //         "deptname": {
        //             "S": message.Body.deptname
        //         },
        //         "location": {
        //             "S": message.Body.location
        //         },
        //         "capacity": {
        //             "S": "" + message.Body.capacity
        //         }
        //     }
        //     // Item: {
        //     //     "dept_no":
        //     //         Number(message.Body.dept_no)
        //     //     ,
        //     //     "deptname":
        //     //         message.Body.deptname
        //     //     ,
        //     //     "location":
        //     //         message.Body.location
        //     //     ,
        //     //     "capacity":
        //     //         Number(message.Body.capacity)

        //     // }
        // };
        // docClient.put(params, function (err, data) {
        //     if (err) {
        //         console.log("users::save::error - " + JSON.stringify(err, null, 2));
        //     } else {
        //         console.log("users::save::success");
        //     }

        // });
        console.log("texttt", text);
        console.log('====================================');
    }

});

// Make sure that the Consumer is subscribing to events so that if it crash
// then the application crash can be handled

consumer.on('error', (error) => {
    console.log('====================================');
    console.log(`Error Occurred while Consumer to talk to Queue ${error.message}`);
    console.log('====================================');
});

consumer.on('processing_error', (error) => {
    console.log('====================================');
    console.log(`Error Occurred in Consumer while processing message from Queue ${error.message}`);
    console.log('====================================');
});

// start the consumer, this will be in background
consumer.start();



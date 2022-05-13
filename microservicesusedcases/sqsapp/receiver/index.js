 
import AWS from 'aws-sdk';
// The Object that will consume the message from the queue 
import {Consumer} from 'sqs-consumer'; 

 

AWS.config.update({
    secretAccessKey: '',
    accessKeyId:'',
    region:'ap-south-1'
     
});

const qurl = 'https://sqs.ap-south-1.amazonaws.com/472804039072/dataq';
// create an instance of SQS
const sqs = new AWS.SQS({apiVersion:'2012-11-05'});

// create a consumer object for the queue

const consumer  = Consumer.create({
    queueUrl:qurl,
    sqs:sqs, // subscribe to SQS to read message from
    batchSize: 10, // number of message can be read in one batch
    // implicitly subscribe to 'message_received' event
    handleMessage: async(message)=>{
        // read and process message e.g. saving in database
        console.log('====================================');
        console.log(`Received Message = ${JSON.stringify(message)}`);
        console.log('====================================');
    }
}); 

// Make sure that the Consumer is subscribing to events so that if it crash
// then the application crash can be handled

consumer.on('error',(error)=>{
 console.log('====================================');
 console.log(`Error Occurred while Consumer to talk to Queue ${error.message}`);
 console.log('====================================');
});

consumer.on('processing_error',(error)=>{
    console.log('====================================');
    console.log(`Error Occurred in Consumer while processing message from Queue ${error.message}`);
    console.log('====================================');
   });

// start the consumer, this will be in background
consumer.start();
   

 
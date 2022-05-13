import express from 'express';
import AWS from 'aws-sdk';

const instance = express();

instance.use(express.json());


AWS.config.update({
    secretAccessKey: '',
    accessKeyId:'',
    region:'ap-south-1'
     
});

const qurl = 'https://sqs.ap-south-1.amazonaws.com/472804039072/dataq';
// create an instance of SQS
const sqs = new AWS.SQS({apiVersion:'2012-11-05'});

instance.post('/api/order',(req,resp)=>{
    let order = {
        OrderId: req.body.OrderId,
        CustomerName:req.body.CustomerName,
        Quantity:req.body.Quantity,
        ItemName:req.body.ItemName
    };
   
    // lets send the message to SQS

    let qmessage = sqs.sendMessage({
        MessageAttributes:{
            "OrderId":{DataType:"String",   StringValue: order.OrderId},
            "CustomerName":{DataType:"String", StringValue: order.CustomerName},
            "Quantity":{DataType:"String", StringValue: order.Quantity},
            "ItemName":{DataType:"String", StringValue: order.ItemName},
        },
      MessageBody: JSON.stringify(order),
      QueueUrl:qurl  
    }).promise(); // Async Execution

    qmessage.then((data)=>{
        console.log(`Data is Successfully Send ${data.MessageId}`);
        resp.status(200).send({message: `Data is Successfully Send ${data.MessageId}`});
    }).catch();

});


instance.listen(5006, ()=>{
    console.log('sender is working on 5006');
});
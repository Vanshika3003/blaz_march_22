import ampq from 'amqplib';
import express from 'express';

let instance  =express();

instance.use(express.json());

instance.get('/api/sender',(req,resp)=>{
    resp.status(200).send({message: 'Bole to Zakas....'});
});

instance.post('/api/sender',(req,resp)=>{
    // connect to the RabbitMQ 
    let open = ampq.connect("amqp://guest:guest@emessage-rabbit:5672");
    // let open = ampq.connect("amqp://localhost:5672");
    // if the connection is successful then publish message to queue
    open.then((connection)=>{
        return connection.createChannel(); // connect to the queue service for Messaging
    }).then((channel)=>{
        // start sending messages to the queue host
        // 1. Create q queue if not exist
        let qname = 'myq';
        // 2. lets start sending the message through the queue
        return channel.assertQueue(qname).then((done)=>{
            let res = channel.sendToQueue(qname, Buffer.from(JSON.stringify(req.body)));
            if(res){
                resp.status(200).send({message: 'Message is send successfully'});
            } else {
                resp.status(500).send({message: 'Message is send failed'});
            }
        });

    }).catch(console.warn);
});


instance.listen(8976, ()=>{
    console.log('Started on port 8976');
});
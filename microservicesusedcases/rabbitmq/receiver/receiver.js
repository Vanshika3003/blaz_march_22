import ampq from 'amqplib';
let qname = 'myq';

// let open = ampq.connect("amqp://guest:guest@emessage-rabbit:5672");

// A Rabbit MQ Service running inside the docker container but mapped with the localhost
// See docker-compose.yml file for port mapping
// 5672:5672
// 15672:15672
let open = ampq.connect("amqp://localhost");


open.then((connection)=>{
    return connection.createChannel();
}).then((channel)=>{
    // subscribe
    return channel.assertQueue(qname)
        .then((done)=>{
            // consume the message
            return channel.consume(qname,(message)=>{
              if(message !== null){
                console.log('====================================');
                console.log(message.content.toString());
                console.log('====================================');
                // acknowledge
                channel.ack(message);
              } else {
                console.log('====================================');
                console.log(`Not able to Read`);
                console.log('====================================');
                channel.ack(message);
              }
            });
           
        });
}).catch(console.warn);
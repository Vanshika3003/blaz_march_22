import AWS from 'aws-sdk';
 
// 1. Authenticate against the AWS and Access DynamoDB

AWS.config.update({
    secretAccessKey: '',
    accessKeyId:'',
    region:'ap-south-1',
    endpoint: 'https://dynamodb.ap-south-1.amazonaws.com'
});

let docClient = new AWS.DynamoDB.DocumentClient();

docClient.query({
    TableName:'Employee',
    KeyConditionExpression: "#dname=:dname", // where clause
    ExpressionAttributeNames:{
        "#dname":"DeptName" // The attribute from Table map with Expression
    },
    ExpressionAttributeValues:{
        ":dname": 'Architecture' // actual value to condition
    }
},(error,data)=>{
    if(error){
        console.log(`Error in Writing data in table Creation ${error.message}`);
        return
    }
    console.log(`Data is Added into the Table  Successfully ${JSON.stringify(data.Items)}`);
}); 

console.log('====================================');
console.log('Using Scan');
console.log('====================================');

docClient.scan({
    TableName:'Employee'
},(error,data)=>{
    if(error){
        console.log(`Error in Writing data in table Creation ${error.message}`);
        return
    }
    console.log(`Data is Added into the Table  Successfully ${JSON.stringify(data.Items)}`);
});

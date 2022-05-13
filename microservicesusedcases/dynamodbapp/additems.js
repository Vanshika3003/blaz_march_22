import AWS from 'aws-sdk';
import fs from 'fs';
// 1. Authenticate against the AWS and Access DynamoDB

AWS.config.update({
    secretAccessKey: '',
    accessKeyId:'',
    region:'ap-south-1',
    endpoint: 'https://dynamodb.ap-south-1.amazonaws.com'
});


// 2. Create an instance of DynamoDB DocumentClient class
// DocumentClient: Provides methods to put, get, update and delete documents
// docClient.put(); --> Add
// docClient.get(); --> Read
// docClient.delete(); --> Delete
// docClient.update(); --> Update
// docClient.scan(); --> Read All Records
// docClient.query(); --> Query using Primary Key

let docClient = new AWS.DynamoDB.DocumentClient();

// Read the json file for data
let fileData = fs.readFileSync('./employee.json');
// put the json data into the array
let employees = JSON.parse(fileData.toString());
// Iterate over the array and put (add) data in the table

employees.forEach((emp)=>{
    docClient.put({
        TableName: "Employee",
        Item:emp // the record
    }, (error,data)=>{
        if(error){
            console.log(`Error in Writing data in table Creation ${error.message}`);
            return
        }
        console.log(`Data is Added into the Table  Successfully ${data.ConsumedCapacity}`);
    })
});
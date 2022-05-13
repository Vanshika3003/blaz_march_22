import AWS from 'aws-sdk';
// 1. Authenticate against the AWS and Access DynamoDB

AWS.config.update({
    secretAccessKey: '',
    accessKeyId:'',
    region:'ap-south-1',
    endpoint: 'https://dynamodb.ap-south-1.amazonaws.com'
});

// 2. Create an instance of DynamoDB

let dynamodb = new AWS.DynamoDB();

const createTable=()=>{
    dynamodb.createTable({
        TableName: 'Employee',
        // Primary Key (Partition Key + Sort Key)
        KeySchema:[
            {
                AttributeName: "DeptName",
                "KeyType":"HASH" // Partition Key
            },
            {
                AttributeName: "EmpNo",
                "KeyType":"RANGE" // Sort Key
            }
        ],
        // Attributes with its DataType
        AttributeDefinitions:[
            {
                AttributeName:"DeptName",
                AttributeType:"S"
            },
            {
                AttributeName:"EmpNo",
                AttributeType:"S"
            }
        ],
        // Read/Write Capacity Unit
        ProvisionedThroughput:{
            ReadCapacityUnits:5,
            WriteCapacityUnits: 5
        }
    },(error, data)=>{
        if(error){
            console.log(`Error in Table Creation ${error.message}`);
            return
        }
        console.log(`Table Created Successfully ${data.TableDescription}`);
    });
};

createTable();
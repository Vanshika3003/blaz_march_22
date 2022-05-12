// 1. import the AWS-SDK

import AWS from 'aws-sdk';
import fs from 'fs';

// 2. Lets Authenticate the Application w.r.t. the AWS using Access Keys

const bucket_name= 'blaze-files-bucket';

const s3 = new AWS.S3({
    accessKeyId: '',
    secretAccessKey:''
});

// 3. Logic for file uplaod
const uploafFile=(file)=>{
    // read file
    const fileData = fs.readFileSync(file);
    // upload the file
    s3.upload({
        Bucket: bucket_name,
        Key:'jamesbond.png', // the file name that will be created
        Body: fileData // this is the data that will be uploaded as stream
    },(error,data)=>{
        if(error){
            console.log(`Error Occurred while uploading file to bucket`);
            return;
        }
        console.log(`File is uploaded successfully in bucket ${data.Bucket}`); 
    });
};

uploafFile('./jb.png');
// 1. import the AWS-SDK

import AWS from 'aws-sdk';

// 2. Lets Authenticate the Application w.r.t. the AWS using Access Keys

const bucket_name= 'blaze-files-bucket';

const s3 = new AWS.S3({
    accessKeyId: '',
    secretAccessKey:''
});

// 3. create a bucket

s3.createBucket({
    Bucket:bucket_name,
    CreateBucketConfiguration:{
        // set the region
        LocationConstraint:'ap-south-1'
    } 
},
    (error,data)=>{
        if(error){
            console.log(`Error Occurred while creating bucket`);
            return;
        } 
        console.log(`Bucket is created successfully ${data.Location}`);    
    }
);


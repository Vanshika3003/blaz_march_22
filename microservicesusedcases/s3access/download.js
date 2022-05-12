// 1. import the AWS-SDK

import AWS from 'aws-sdk';
import fs from 'fs';

// 2. Lets Authenticate the Application w.r.t. the AWS using Access Keys

const bucket_name= 'blaze-files-bucket';

const s3 = new AWS.S3({
    accessKeyId: '',
    secretAccessKey:''
});


const downloadFile=()=>{
    // S3 provides the download of files using stream
    // a. Create a Stream in Node.js process that will have some name

    let outStream = fs.createWriteStream('downloadedjs.png');

    // get the file as a stream from Bucket
    let receivedStream = s3.getObject({
        Bucket: bucket_name,
        Key:'jamesbond.png' // the resource name
    }).createReadStream(); // get the stream in the Node.js process after download and make it readable

    // Pipe the receivedStream in same order of response into the outStream
    receivedStream.pipe(outStream);
    console.log('The File is downloaded Successfully');

};

downloadFile();
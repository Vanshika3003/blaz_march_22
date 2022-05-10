# Node.js Programming

1. Modules
    - A Standard JS Object Model that is installed along with the Node.js Installation on the Machine
    - Web Server Module
        - http and https
    - File System Module
        - USed to access File System
            - fs, path
    - Security
        - crypto
    - ..... many more modules                  
2. Custom Modules
    - Developer defined modules for Custom Functionality 
3. Third Party Modules
    - Supported by Node.js runtime
    - Used for Production Level Application Development 
        - Express
        - Sequelize
        - node-sql
        - mssql
        - JsonWebToken
        - express-session
        - cors
        - ..... and many more
4. Node.js 10+ Version supports ES 6
    - Traditional (No ES6) loading of standard/custom/third-party modules in Node.js application      
        - var module_instance = require('MODULE-NAME');
        - e.g.  
            - var http = require('http');
                - http module will be loaded and cached for the current application
                - Once the module is cached it will be available across all JS Files (Custom-Modules) in the Current Node.js application   
        - Loading Custom Module
            - var mymodule = require('PATH-OF-CUSTOM-MODULE');
                - e.g.
                    -  var mymodule = require('./file');
                        - The file.js will be searched, loaded and Cached for the current application        
                        - If file1.js is not found the 'Module_Not_Found' exception will be thrown bu Node.js Runtime
        - If using Third Part Module then  do the following
            - Install the Module
                - npm install --save MODULE-NAME
                    - e.g. npm install --save express
            - Load the Module
                - var express = require('express');
    - ES 6 Approach of Loading Modules
        - Module package.json with following Key
            - "type":"module"
                - Node.js runtime will implicitly perform Module Lookup, Loading and Caching
            - Load the Module in .js file as follows
                - import http from 'http';
                    - The http will be an instance of standard 'http' module
# First Node.js Code
- Running the .js file on Node.js server as follows
    - node FILE_NAME

``` javascript
console.log('Hello World');

function operations(str, c){
    if(c === 'L' || c === 'l') return str.toLowerCase();
    if(c === 'U' || c === 'u') return str.toUpperCase();
    return str;
}

console.log( operations('Node.js', 'l'));

console.log( operations('Node.js', 'u'));

let Employees = [
    {EmpNo:1,EmpName:'A', DeptName:'D1'},
    {EmpNo:2,EmpName:'B', DeptName:'D2'},
    {EmpNo:3,EmpName:'C', DeptName:'D1'},
    {EmpNo:4,EmpName:'D', DeptName:'D2'}
];


let res = Employees.filter((e)=>{ return e.DeptName === 'D1'});
console.log(JSON.stringify(res));

class Utilities {
    sort(arr){
        return arr.sort((a,b)=> {return a - b;});
    }
    reverse(arr){
        return arr.sort((a,b)=> {return b - a;});
    }
}

let arr = [2,3,4,1,5,7,6.9,8];
let obj = new Utilities();
console.log(`Sort = ${JSON.stringify(obj.sort(arr))}`);
console.log(`Reverse = ${JSON.stringify(obj.reverse(arr))}`);
```
- Install the followig package for intellisense
    - npm install --save-dev @types/node
- If using ES 6 Module Loader the Node.js Runtime will generate following error
    - (node:26272) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
(Use `node --trace-warnings ...` to show where the warning was created)
- To resolve the error Modify the package.json  as explained in error message 


- Creating a Web Server using Node.js
    - The 'http' module
        - Used to create a HTTP Pipeline Environment for HTTP Communication from Client to Node.js apps
        - createServer(RequestListener) method
            - RequestListener: Accept Http Request and Generate Http response
                - Request Object
                        - Request Body
                        - Method (Header)
                            - get, post, put, delete
                        - Url (Header)
                            - Server URL used for request processing
                - Response Object
                    - Write Response Against the request
                        - writeHead(), response header
                        - write(), response body
                        - end(), End the Response            
                            
        - listen(PORT) method
            - Start listing on the PORT

``` javascript
 // 1. Import and cache the object
 import http from 'http';

 // 2. Create a Server
 let server = http.createServer((request,response)=>{
    // 2a. Write a Response header
    response.writeHead(200, {'Content-Type':'text/html'});
    // 2b. Write the Response Message
    response.write('Hello World!!');
    // 2c. End the Response
    response.end();
 }) ;

 // 3. Start Listening on the port
 server.listen(7013);
 console.log('Server Started on port 7013');
```

- Creating a Data Server

``` javascript
// 1. Import and cache the object
import http from "http";

// 1a. lets define some data
let Employees = [
  { EmpNo: 1, EmpName: "A", DeptName: "D1" },
  { EmpNo: 2, EmpName: "B", DeptName: "D2" },
  { EmpNo: 3, EmpName: "C", DeptName: "D1" },
  { EmpNo: 4, EmpName: "D", DeptName: "D2" },
  { EmpNo: 5, EmpName: "E", DeptName: "D1" },
  { EmpNo: 6, EmpName: "F", DeptName: "D2" },
  { EmpNo: 7, EmpName: "G", DeptName: "D1" },
  { EmpNo: 8, EmpName: "H", DeptName: "D2" },
];

// 2. Create a Server, that will return data based on
// header information received in request object
// e.g. http://localhost:7013/id
let server = http.createServer((request, response) => {
  // 2a. Lets read request header, the 'id' is custom key
  let id = parseInt(request.headers.id);
  if (id === undefined || id === 0) {
    // 2b. return all records
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify(Employees));
    response.end();
  } else {
    // 2c. response specific Employee Record based on id
    let emp = Employees.find((e) => {
      return e.EmpNo === id;
    });
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify(emp));
    response.end();
  }
});

// 3. Start Listening on the port
server.listen(7013);
console.log("Server Started on port 7013");


```

- http Module for Simple REST APIs with Node.js
    - RequestListener
        - IncomingMessage Request Object
        - The 'Method' Property
            - GET, POST, PUT, DELETE
        - The 'on()' method, for request processing status
            - The 'one()' method has processing status events
                - 'data', event to receive data stream and start processing it 
                - 'end', event that represents the stream receive end
                - 'error', event raised when error occur
                - 'pause', 'resume', event for pause and resuming stream processing    

- The 'fs' module
    - The FileSystem Module
    - Access to the OS Object Model to interact with File IO
        - Read File (Sync and Async)
            - readFile(), Async
            - readFileSync(), Sync
        - Write File (Sync and Async)
            - Create new File if not exist and write data in it
            - Append File
            - writeFile(), Async
            - writeFileSync(), Sync
            - open() and openSync(), used to create a new File
            - appendFile() and appendFileSync(), to append data to existing file
            - unlink() and unlinkSync(), delete file
        - The 'stat()' method
            - This is used while reading contents of directory     
            - The Stat could be file or subdirectory
        - Directories (Sync and Async)
        - Streams
            - Contineous Data Flow
            - File Upload and Download Operations
        - Pipes    
            - Joining Streams
- Node.js Globals
    - __dirName (Note: ReferenceError: __dirname is not defined in ES module scope)
        - Perform file I/O from the path where the Node.js app is working
    - __fileName
    - env
        - The Environment Object          
    - To read file path in ES 6, we need to use the Global import Meta URL
        - import.meta.url
            - Create a Absolute PATH for Relative Directory base path
                - c:\ will be changed to c:/
        - The 'url' module
            - fileUrlToPath
                -  Map the Directory Absolute path to the Directory Relative Path which is common on
                    - Windows, Linux, Mac, etc.                   

# Express.Js Application

1. Express Object Model
    - npm install --save express
    - The 'express()' object
        - HTTP Request Pipeline Methods
            - get(), post(), put(), delete()
        - A Method to integrate with Middlewares in HTTP Request Pipeline
            - use(MIIDDLEWARE-TO-LOAD)
        - Router
            - Provided using IRouter interface  
                - get(),post(),put(), andd delete()       
                - First parameter for all these methods will be URL
                - Second parameter is 'RequestHandler'
                    - The RequestHandler will perform following
                        - Read Request Header
                            - Header parameters like 'Authorization'
                        - Read request body
                            - Data to be created, updated
                        - Generate Response against the request as follows
                            - File
                            - JSON or Data Response      
        - listen()
            -Exposing and endpoint from Express Server         
2. Express Web Apps
    - Respond static Resources like Html, JavaScript, Css to the http request
    - the 'static()' method of 'express()' object to read static file and respond it           
3. to contineously run the server use 'nodemon' package
    - npm install -g  nodemon
    - nodemon [FILE].js
        - If the js file change, it will be reloaded      
4. For Node.js and Express the Body is Received as Stream. The Express post and put methods will fail to read stream.  We MUST configure the JSON  middleware for Express HTTP Pipeline 
    - expres.json()
        - JSON body Parser in Older versions we were using body-parser package explicitly
    - express.urlencoded({extended:false})
        - JSON parsing
5. To make sure that the Express REST API accessible to the third-Part client, configure CORS Middleware in the pipeline
    - npm install --save core
    - import cors from 'cors'
    - instance.use(cors({
        origin:"", methods:"", allowedHeaders:""
    })); OR
    - instance.use(cors());
6. Building Line-of-Business Apps (LOB) using Express.js
    - Express with its dependencies
        - CORS
        - JSON
        - HTTP Methods for REST APIs
        - Static Files for Server-Side host for static files e.g. HTML Pages, JS and CSS
    - Data Access   
        - Using Object-Relational-Mapping (ORM)
            - sequelize
            - sequelize-auo
            - sequelize-cli
            - pg, the PostgreSQL DB Provider
            - pg-hstore, the DB Connection and Data Persistance Provider
        - Commands
            - npm install -g sequelize sequelize-cli sequelize-auto pg pg-hstore
            -  npm install --save sequelize sequelize-cli sequelize-auto pg pg-hstore

        - Generate the Logical Model from Database
            - sequelize-auto -h localhost -d enterprize -u sabnisadmin -x P@ssw0rd_ -p 5433 --dialect postgres -o models -t department employee users -l esm

            - -h, the host machine where database server is present. This can be name of the host machine or IP address
            - -d, database name
            - -u, user name
            - -x, password
            - -p, the port exposed by database
            - --dialect, the database provider engine name
                - postgres, mysql2, mssql, sqlite,ariadb
            - -o, the output folder where Model classes are created
            - -t, blank space separated list of tables from database from which Model classes will be created
            - -l esm, generate ES 6 Modules with classes
        - Important Objects for Programming
            - Model, base class for Model classes generated from db tables
                - The 'init()' method to initialize Mapping between class and the db  table
                - The 'belongsTo()' method
                    - Establish One-to-One relationships across tables
                - The 'hasMany()' method
                    - Establish One-to-Many relationship across tables
                - Following Data Operations methods are async
                    - findAll() 
                     - Return all records
                    - findOne({where:{CONDITION}});
                    - create(OBJECT-TO-BE-CREATED)
                    - update({OBJECT-TO-BE-UPDATED}, {where:{CONDITION}});
                    - destroy(where:{CONDITION})  
                -      
            - sequelize, the Module for ORM
                - All methods are Asynchronous
                    - sync()
                        - Connect to DB, and it is not exists then new database will be created
                            - await sequelize.sync({force:false});
                                    - Do not Overwrite the database
            - 'pkg'
                - Module that define ES 6 DataTypes
                - const {DataTypes} = pkg
                    - DeStructuring for 'pkg' module which contains the ES 6 DataTypes like
                        - Number
                        - String
                        - Date 
    - Use Transactions
        - Managed Transaction (Recommended)
            - Transaction Monitor Object  used to Monitor the transaction
                - The Transaction Object will be responsible to manage an execution state of each 'statement' (Insert/Update/Delete statements OR the Mapping Model methods)  
            - Implicit Commit and Rollback 
        - UnManaged Transaction
            - The Transaction Object MUST call the Commit and Rollback for transactions based on the execution      
    - Use Queries
        - await sequelize.query("QUERY Statement")
    - Use Stored Procedure Calls   
        - await sequelize.query("Stored Procedure Call")   
        - await sequelize.query("Function Call")                 
- JS Full-Stack OR MERN Stack OR PERN Stack
    - Design Principals with REST APIs
        - The API Method does not have any logic inside it
            - REST API -- Calling Logic class -- Calling Data Access
        - API Methods MUST be secure
            - Login and Logout Strategy
                - Session State
                    - For Express Web Apps for User Based Authentication
                - User Based Authentication used in case of APIs
                    - Users Authentication
                    - Users + Roles
                    - Users + Tokens
                    - Users + Roles + Token
- Using Json Web Token (JWT) for Authorization of Express REST APIs   
    - Structure of JWT     
        - Header.Payload.Signature
        - Header
            - Contains Algorithm for Encryption of Information in Token               
        - Payload
            - Contains Identity Claims to Authorize the the user
                - User Name
                - User Name + Role
                - User Name + Role + Access Rights
        - Signature
            - Integrity Check for the Information stored in the token
            - Generated using Cryptography Module 
    - JsonWebToken Package
        - Express-JWT
            - based on jsonwebtoken
        - npm install --save jsonwebtoken 
        - jsonwebtoken.sign(payload, signature, algorithm)
            - This will sign-in the authenticated user
            - The token will be saved in Application Process
        - jsonwebtoken.verify(token, signature, decode)
            -  token: Received from the Client into HTTP Request Header using AUTHORIZATION Key 
                - AUTHORIZATION: `Bearer TOKEN-VALUE`
            -  signature
                - verify the integrity
            - decode
                - The validation state of the token
    - Process of Implementation
        - Register New User
        - Authenticate the User
            - Generate Token
        - Verify the Token
            - Token Integrity Check     
- Session State with Express
    - express-session package
        - built upon express
        - The 'session' object
            - secret, used for Encrypting / Decrypting requests
            - resave, boolean, make an entry of the session state into the store for each request if the value is 'true' else if set as 'false', then only once the session is stored
            - saveUnInitialized, boolean is false, the the communication will be w/o session information between caller and the server and is true, the session info is shared across server to client
                - This will be used for SessionContext under which the communication will takes place   
            - cookie, a JSON object
                -  maxAge: Lifetime of Session Based Communication information exchanges between client and the server
                    - Recommended min value is 20 minutes 
                - secure, boolean,if set to true, then it will by default provide 'Cross-Site-Scripting' aka 'XSS', this is possible because the cookie is not accessible to client App, prevent the session hijacking
                - httpOnly, if true then along with 'secure' the XSS will be prevented
- Handling Chain Of Promises for Establishing Communication across Multiple Async Node.js apps
    - a Promise Chain Monitor object, deferrer
    - Node.js Modules for Deferrer aka Promise Handlers
    - q and bluebird
    - npm install --save q
        - let defer = q.defer()
            - Create a channel to monitor all async calls
            - returns the object object that tracks the Success of failure of execution
        - defer.resolve(), success
        - defer.reject(), fail       

- Building Modern Scalable MERN/PERN Stack App
    - Front-End
        - React.js
            - Basics
                - Project Configuration
                    - React CLI
                    - Introduction of Web Pack
            - Components (Functional)
                - UI
                - Databinding
                - Events
                - Hooks
                - Re-Usable Components
                - Communication Across Components 
            - Ajax Calls
            - Custom Hooks
            - Error Handling
            - Single Page app using Routing
                - Code-Splitting
                - Lazy Loading
            - Higher-Order-Components
            - Profiler (Introduction)
            - Portal (Introduction)
            - Application State Management using Redux
                - Redux Object Model
                - SAGA Middlewares
            - Next.js Framework for React.js
            - Amplify Deployment
            - A Full Web App by Integrating React With Node (If Time Permits)    
    - Server-Side
        - Think of Scalable Data Persistance Layer
            - Cloud based Data Store     
                - RDS, relational
                - DynamoDB, NoSQL
                - File Resource Storages
                    - Simple Storage Service aka S3
            - Server-Side App Deployment
                -  Deploy as Web App
                    - Amplify Service
                        - Front-End (React, Angular, Vue, etc.)
                        - Service Apps aka Server-Side, REST APIs with Node.js, JAVA, .NET Core, etc.
                - Serverless apps
                    - AWS Lambda
                        - REST API as Serverless app
                - Implementing Server-Side as Microservice
                    - Docker
                        - Image Creation
                        - Containerization
                    - Kubernetes aka K8s   
                        - Cluster Creation on Cloud
                            - Elastic Container Registry (ECR)
                            - Elastic Kubernetes Server (EKS)   
                - Providing Controlled Access of Microservices from Clients
                    - Application Gateway
                        - Express-Gateway
                        - Ingress
                        - AWS API Management / AWA API Gateway           
                - Communication Across Microservices
                    - Using Messaging
                        - AWS Simple Queue Service (SQS)
                        - RabbitMQ
                            - Configure Explicitly 
                        - Any other Messaging Services
                    - Use of Cache
                        - Distributed Cache using Redis Cache (Create Explicitly) 
                        - AWS Elastic Cache            
    - DevOps Introduction
    - Testing
        - Node.js REST API
            - Unit Testing
                - Mocha
                    - read all test files from test folder and then load and run them
                - Chai
                    - Assertion Library used generally for Node.js 
                    - Use of the 'Request' module to call REST APIs
                - Mocha + Chai + Request
                    - Run the Async Tests
                Use Swagger           
            - npm install -g mocha
                - npm install --save mocha chai request    
            - Load testing
                - Tools like JMeter
                    - Time Frame based exponential request increases 
            - MAke sure that the Code-Coverage is used to very the the code is having quality for production
                - Istanbul
                - nyc
                    -  npm install --save-dev nyc        
        - React.js Components Testing                                                  
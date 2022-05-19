# Serverless

1. Run the code w/o provisioning or managing infrastructure
    - Upload the code and ask the cloud to execute it
    - Pay for the processing time only
    - Execute the code based on events and scale the code as per the need implicitly
    - Optimize the execution time and performance
        - CPU Utilization
        - Memory Utilization
2. Need for Apps
    - Run the code on event/trigger
    - Perform the Operation
3. AWS Lambda
    - Configure the deployment
    - Inform the AWS about the Runtime Stack
        - The execution Engine
            - Node.js, JRE, .NET, ect.             
4. Cases / Events those are generally used for developing Serverless app
    - Client App (React/Angular/Vuew/JSP/ASP.NET Core/Mobile App) ---> Upload File in S3 ---> Trigger the Lambda ---> The Serverless Function is executed to process the file behind the scene            
    - Sender send Message to Queue --> Trigger is executed when message in Queue --> Lambda Function Read the Message and Process it internally
    - Inter Backup of data

5. serverless-http
    - An event package to listen the HTTP request
    - Used to deploy the REST API as a Lambda or use Lambda as a REST API
    - Create serverless.yml file for deployment configuration
    - npm install -g serverless-http
    - npm install --save aws-sdk serverless-http express    

6. use the serverless-http instance in the code see index.js
7. create the serverless.yml file for deployment configuration
```` json
# the deployment configuration file for the serverless app

# 1. define name

service: blaze-serverless
# 2. deployment information of the provider
provider:
  name: aws # the AWS Cloud
  runtime: nodejs14.x # node.js runtime version supported by the AWS Lambda
  stage: dev # the mode of the deployment 'dev' (development) / prod for (production)
  region: ap-south-1 # region
  lambdaHashingVersion: 20201221
# 3. The Lambda Function Description
functions:
  app:
    handler: index.handler # the REST API instance exported from index.js
    events:
      - http: ANY /
      - http: 'ANY {proxy+}'


````

7. Run the following command from the path where serverless.yml present
    - serverless deploy
    - OR
    - sls deploy
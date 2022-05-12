# Using Microservices Practically 
1. Deploying and Running Muiltiple Microservices
    - On-Premises Deployment
        - Docker-Compose Service    
            - Manages Containers
            - Manages Networking Across them (if required)
            - If sufficient resources for Microservices e.g. RAM, CPU, etc. is not available then docker-compose should avoided
            - If using the Docker-Compose for deploying muliple Microservice on Premises then use following steps
                - create docker-compose.yml file on the root of the project folders of all microservices
                    - This will help in reading 'dockefile' for each sub-folder where each sub-folder contains one Microservice 
                - run following command to create, deploy and run microservices
                    - docker-compose up     
                        - Read docker-compose.yml, then read dockerfiles from sub-folders and deploy Microservice and allocate network resources to it
                    - docker-compose down     
                        - Unload Microservices, release and delete containers and release Network resources
            - Samples
                - https://docs.docker.com/compose/gettingstarted/                 

        - Use the Kubernetes, recommended in DevOps with CI/CD/CT pipeline
            - Cluster Manager
                - Node
                - POD
                - Services
                - Gateway Manager
            - Manages Microservices and its resources effectively
            - Multiple Instances of Same Microservice an be easily managed
            - Auto-Configuration of Communication
                - LoadBalancer
                - ClusterIP
                - NodePort     
            - Kubernetes Service Providers
                - Minikube
                - Microk8s
    - On Cloud Deployment 
        - Azure
            - Azure Container Registry (ACR)
            - Azure Kubernetes Service (AKS)
        - AWS
            - Elastic Container Registry (ECR)
            - Elastic Kubernetes Service (EKS)    
2. Strategies of Microservices Communication amongst each other
    - Use Platform Provided Infrastructure Services to establish communication across Microservices
        - Using Queue for Transactional Messaging
            - RabbitMQ
            - Simple Queue Service (SQS) on AWS
            - Azure Queue Storage
            - Azure Service Bus 
        - Caching
            - Redis Distributed Cache
            - Any other Cache Provider    
3. How to define easy access of Microservices using gateways
    - Express Gateways (Program + Configuration)
    - Ingress by Kubernetes (Configuration)
    - API Gateway provided by Cloud Providers (Cloud-Based Service for Gateway) 
4. How to manage Microservices on Cloud
    - Have the Cloud Subscription
    - Learn Features of Clusters
    - Deploy App
5. Storage Services recommended for Microservices Apps on Cloud
    - Relational DB
        - RDS on AWS
            - MySQL, PostgreSQL, MariaDB, MS-SQL, eyc.
        - Azure SQL
        - Azure Relational Instance for
            - ySQL, PostgreSQL, MariaDB, etc.
    - NoSQL
        - DynamoDB on AWS
        - CosmosDB on Azure
            - SQL API aka DocumentDB
            - MongoDB
            - TableService
            - Graph             

# Using AWS Services

1. Download and install AWS CLI on the Machine
2. create a key-pair to authenticate the Dev Machine with AWS
3. Runt the Configuration
  - aws configure
AWS Access Key ID: [ACCESS_KEY_ID]
AWS Secret Access Key :  [SECRET-ACCESS_KEY]
Default region name : [REGION_NAME]
Default output format : [FORMAT]
 
3. To Access AWS Service, we need AWS_SDK for Node.js JavaScript Apps
    - npm install --save aws-sdk
4. Use S3 i.e. Simple Storage Services to upload Binary Files to AWS using Node.js      
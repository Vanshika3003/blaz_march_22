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
            - MySQL, PostgreSQL, MariaDB, etc.
    - NoSQL
        - DynamoDB on AWS
            - use the EndPoint to connect
                - https://dynamodb.[REGION-NAME].amazonaws.com
                - https://dynamodb.ap-south-1.amazonaws.com
        - CosmosDB on Azure
            - SQL API aka DocumentDB
            - MongoDB
            - TableService
            - Graph             

# Two Types of Modern App
1. Cloud Based App , Lift-and-Shift
    - Deploy app on Cloud
        - EC 2 instance (Virtual Machine)
            - Deploy App
            - Deploy Database
        - Use the Network Security Group, Security Rules, IP Adresses     
    - Use the application specific Security
        - DB with Credentials Information        
2. Cloud Enable App
    - The application is definitely Cloud Based
    - The Application uses the Cloud Resources
        - Relational Database, RDS Service
        - NoSQL Database, DynamoDB
        - Storage, S3
        - Messaging, SQL, Cloud Based Messaging Service
            - Cloud Based Enterprise Messaging using RabbitMQ
                - amqplib
                    - Asynchronous Message Queue Protocol
                    - @types/amqplib
                        - Type Intellisense 
                - amqplib-rabbitmq
                    - Inetgrataion with RabbitMQ Service      
        - Cache Service
        - .... any many more as per Application need
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


# Kubernetes important Concepts

1. Cluster
    - A group of physical or virtual servers where Kubernetes is installed
2. Node (Master)
    - Physical or virtual server that controls the Kubernetes cluster
3. Node (Worker)
    - Physical or virtual server where the container technology run on it
        - AWS Elastic Container Service (ECR)        
        - Azure Azure Container Service (ACR)
4. Pods
    - Group of containers and volumns which shared teh same network namespace
5. Laebls:
    - Key:Value pair defined by the DevOps Engineer which is associated with Pod
6 Master: 
    - Control plane components that provides access to manage the cluster
7. Service
    - An abstraction which servs as a prosy for group of pods

- The Deployment Configurations (yml file)
    - Set the Service Deployment Metadata
        - label
        - Provide the Service Specification
            - Container
                - name
                - image
                - resources
                    - Memory
                    - CPU
                - port configuration
                    -  container Port
- The Service Configuration (yml)
    - Use the deployment configuration Label
        - Connection Type
            - Access point to the service
                - LoadBalancer, port from out-side communication (Specify the service access from the Cloud Provider)
                - ClusterIP, internal IP where the service is exposed. Limited within the cluster
                - NodePort, expose the service on Node's IP (Static POrt)    
- The gateway configuration
    - create gateway.yml and configure the gate way
        - e.g. ingress, istio, etc
    - Recommeds to use Cloud API gateway    
- Kubernetes Commands
    - kubectl get pods
        - List all Pods
    - kubectl get nodes
        - List all Nodes
    - kubectl get services
        - List all service and their IPs for accessing
    - kubectl describe pod [POD-ID]        
    - kubectl apply -f [deployment].yml
        - Create deployment environment e.g. fetch image, create container, allocate CPU and RAM, apply environment variables
    - kubectl apply -f [service].yml
        - configure service of POD so that its can be accessed over LoadBalancer, ClusterIP, NodePort
    - kubectl delete -f [service].yml
        - delete the service and free Port and IP
    - kubectl delete -f [deployment].yml
        - delete physical resources e.g. CContainer, CPU release, Memory release, etc.             


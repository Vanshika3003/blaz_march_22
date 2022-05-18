# Deploying Service on Local Kubernetes Cluster
1. Create Docker Image of of the application to be deoplyed

2. Push the image into the Docker Registry
    - https://hub.docker.com
    - docker tag [IMAGES-NAME]:[TAG]  [REPOSITORY-NAME]/[IMAGES-NAME]:[TAG] 
    - e.g.
        docker tag servk8slocal:v1 mast007/servk8slocal:v1
    - push imege to hub aka registry    
3. create deployment.yml file K8s deployment  
```` json
apiVersion: apps/v1
kind: Deployment # this is the configuration for POD deployment in K8s
metadata:
  name: servk8sdeploylocal #name of the deployment
  namespace: default # the namespace under which the POS and service will be deployed
spec: #deployment specifications
  selector: # query to the POD for deploying the service
    matchLabels: # the name will be match
      app: servk8slocal # This will be the service deployment value which will be used by the service.yml for service deployment
  template:
    metadata:
      labels:
        app: servk8slocal # This will be the service name  that will be created, use this in  service.yml
    spec: # specification for service deployment
      containers: # define containers information
      - name: servk8slocalcontainer # name of the container
        image: IMAGE_ON_ELASTIC-CONTAINER-REGISTRY # image to bhe pulled from the DOcker HUB
        resources: # Infrastructure resurces
          limits:
            memory: "128Mi" # same as 128 MB
            cpu: "500m" # Percentage of the CPU  same as half the CPU
        ports:
        - containerPort: 7011 # the port exposed by the container      

````
4. Create service deployment i.e. service.yml
```` json
kind: Service
apiVersion: v1
metadata:
  name: servk8slocal #deployment name for the service
spec:
  selector:
    app: servk8slocal # The name of the service MUST with spec.selector.app
  type: LoadBalancer # The Service will be published on Public IP assigned by the cluster 
  ports:
    - port: 6701 # Port provided by cluster to access the service using LoadBalancer
      targetPort: 7011 # container Port
````

5. Deploy the deployment.yml and service.yml
    - Possible errrors while deployment
        - ImagePullBack
            - Image Not Found
        - ImageRollBack
            - Image Deployment crash    


- Use the eksctl tool
  - Elastic Kubernetes Service Tool used to manage the deployment
    - Create ECR
    - Create EKS


- Create a Docker image

- create Elastic COntainer Registry (ECR) to push image on ECR using the following command

aws ecr create-repository --repository-name [REPOSITORY-NAME] --region [REGOIN-NAME]

e.g.
aws ecr create-repository --repository-name eksdemoecr --region ap-south-1

{
    "repository": {
        "repositoryArn": "arn:aws:ecr:ap-south-1:472804039072:repository/eksdemoecr",
        "registryId": "472804039072",
        "repositoryName": "eksdemoecr",
        "repositoryUri": "472804039072.dkr.ecr.ap-south-1.amazonaws.com/eksdemoecr",
        "createdAt": "2022-05-18T14:54:58+05:30",
        "imageTagMutability": "MUTABLE",
        "imageScanningConfiguration": {
            "scanOnPush": false
        },
        "encryptionConfiguration": {
            "encryptionType": "AES256"
        }
    }
}

- Login on the ECR so that the image can be PUSHED on IT

aws ecr get-login-password --region | docker login --username AWS --password-stdin [SUBSCRIPTIOn-ID].dkr.ecr.[REGION-NAME].amazonaws.com/[REPOSITORY-NAME]

e.g.
   aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin 472804039072.dkr.ecr.ap-south-1.amazonaws.com/eksdemoecr
- Tag the Docker Image created earlier to the ECR URL using the following command
- docker tag [LOCAL-IMAGE]:[TAG] [SUBSCRIPTION-ID].dkr.ecr.[REGION-NAME].amazonaws.com/[REPOSITORY-NAME]:[TAG]
e.g.
docker tag servk8seks:v1 472804039072.dkr.ecr.ap-south-1.amazonaws.com/eksdemoecr:v1

- PUSH the above Image to ECR

- Once the Image is pushed on the ECR create EKS Cluster using the CloudFormation tool provided on AWS, use the following URL for the Same
  - https://amazon-eks.s3.us-west-2.amazonaws.com/cloudformation/2020-06-10/amazon-eks-vpc-private-subnets.yaml
  - The above URL will download the Cluster YML file for creation of the EKS Cluster Configuration Provision using 'CloudFormation' 

- Create a Cluster.json and use all information received from Cloud Formation to create the cluster. create cluster using  this file into .kube folder of c:\user\[USER]\.kube\config

- eksctl create cluster -f cluster.json --kubeconfig=c:\users\acer\.kube\config

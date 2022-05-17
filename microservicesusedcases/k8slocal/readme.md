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
        image: mast007/servk8slocal # image to bhe pulled from the DOcker HUB
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


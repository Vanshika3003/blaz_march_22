    

import express from 'express';
import cors from 'cors';

const PORT =  process.env.PORT || 7012;

// create an instance
const instance = express();
// Add JSON Middleware in HTTP Pipeline
instance.use(express.json());
// do not parse incoming data other than HTTP Request Message Body
instance.use(express.urlencoded({extended:false}));
// configure CORS
instance.use(cors({
    origin: "*",
    methods: "*",
    allowedHeaders: "*"
})); 


let Customers = [
    { CustomerId: 1, CustomerName: "A", Section: "D1" },
    { CustomerId: 2, CustomerName: "B", Section: "D2" },
    { CustomerId: 3, CustomerName: "C", Section: "D1" },
    { CustomerId: 4, CustomerName: "D", Section: "D2" },
    { CustomerId: 5, CustomerName: "E", Section: "D1" },
    { CustomerId: 6, CustomerName: "F", Section: "D2" },
    { CustomerId: 7, CustomerName: "G", Section: "D1" },
    { CustomerId: 8, CustomerName: "H", Section: "D2" },
  ];

// Lets create REST EndPoints
instance.get("/api/customers", (req,resp)=>{
    // send HTTP Status Code and the Response Object
    resp.status(200).send({
        message: 'Data Reading is Successful',
        data:Customers
    });
});

// The Get method with URL Parameter
instance.get("/api/customers/:id", (req,resp)=>{
    // read URL Parameter
    let id = parseInt(req.params.id);
    console.log(id);
    if(id === 0){
        resp.status(500).send({
            message: 'Invalid Parameter Value'
        });
    } else {
        let cust = Customers.find((e,i)=>{
            return e.CustomerId === id;
        });
        console.log(JSON.stringify(cust));
        resp.status(200).send({
            message: 'Data Reading is Successful',
            data:cust
        });
    }
});

// write data using POST/PUT requests
instance.post("/api/customers", (req,resp)=>{
    // read the data from the HTTP Request body
    let cust = req.body;
    console.log(`Received data = ${JSON.stringify(cust)}`);
    Customers.push(cust);
    resp.status(200).send({
        message: 'Data Reading is Successful',
        data:JSON.stringify(Customers)
    });
});


instance.put("/api/customers/:id", (req,resp)=>{
    // YOUR HEADACHE
});

instance.delete("/api/customers/:id", (req,resp)=>{
    // YOUR HEADACHE
});


// start listening
instance.listen(PORT, ()=>{
    console.log(`Started on port ${PORT}`);
});
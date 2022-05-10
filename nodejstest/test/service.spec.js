// importing chai
import chai from 'chai';
 
// import request
import request from 'request';
// import instance from the service
// and running the service
import instance from '../service.js';

// lets define an instance of expect objet from 'chai'
 let expect = chai.expect;

 const testdata =  { EmpNo: 1, EmpName: "A", DeptName: "D1" };

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

// the test suite
describe('The Test Suit for the Node.,js REST API Tests ',()=>{
      
    // the test case for get request
    // done() the callback that will monitor an async execution
    it('the api must return status code as 200', (done)=>{
        // arrange the call using teh request object
        // act : is the request object
        // error: An Error during the communication
        // response: The response received from the service (response header)
        // body: The response body
        request("http://localhost:7011/api/employees",(error, response,body)=>{
            // assert the response as Status code as 200
            expect(response.statusCode).to.equal(200);
            // complete the an async operation+
            done(); 
        })
    });

    // the test for the employee object return from the REST API
    it('the api must return employee object', (done)=>{
       
        request("http://localhost:7011/api/employees/1",(error, response,body)=>{
           let data = JSON.stringify((JSON.parse(body)).data);
            expect(data).to.equal(JSON.stringify(testdata));
            done(); 
        })
    });
    // the test for 500
    it('the api must return status code as 500 when is = 0', (done)=>{
       let id = 0;
        request(`http://localhost:7011/api/employees/${id}`,(error, response,body)=>{
        
            expect(response.statusCode).to.equal(500);
            done(); 
        })
    });

     // the test for post request
     it('the collection length must be increased by 1 after the post request', (done)=>{
        let record = { EmpNo: 9, EmpName: "A", DeptName: "D1" }  
        request.post(`http://localhost:7011/api/employees`,{
             headers:{
                 'Content-Type': 'application/json'   
             },
             body:JSON.stringify(record)
         },(error, response,body)=>{
            let data = ((JSON.parse(body)).data);
            
             let receivedLength = (JSON.parse(data)).length;
             expect(receivedLength).to.equal(Employees.length + 1);
             done(); 
         })
     });
});

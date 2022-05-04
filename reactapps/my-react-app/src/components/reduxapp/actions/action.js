import DepartmentService from './../../../services/departmentservice';
const  addDepartment=async (dept)=>{
    console.log('Add Department Action is dispatched');
    dept.deptname = dept.deptname.toUpperCase();
    let serv = new DepartmentService();
    let depts = await serv.getData();
    console.log(`Data received = ${JSON.stringify(depts)}`);
    console.log('OUT');
    return {
        type: 'ADD_DEPARTMENT', // output action dispatched
        depts // the payload
    }
};

export default addDepartment;
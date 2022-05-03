const addDepartment=(dept)=>{
    console.log('Add Department Action is dispatched');
    dept.deptname = dept.deptname.toUpperCase();
    return {
        type: 'ADD_DEPARTMENT', // output action dispatched
        dept // the payload
    }
};

export default addDepartment;
import React from 'react';
import AddDepartmentComponent from './components/adddepartmentsagacomponent';
import ListDepartmentsComponent from './components/listdepartmentssagacomponent';

const MainReduxSAGAomponent=()=>{
    return (
        <div className='container'>
            <AddDepartmentComponent></AddDepartmentComponent>
            <hr/>
            <ListDepartmentsComponent></ListDepartmentsComponent>
        </div>
    );
};

export default MainReduxSAGAomponent;
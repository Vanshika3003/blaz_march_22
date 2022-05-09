import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import components here
import App from './App';
import DepartmentComponent from './components/departmentcomponent/departmentcomponent';
import ContexctProviderComponent from './components/contextprovidercomponent/contextprovidercomponent';
import FormValidationComponent from './components/validationcomponent/FormValidationComponent';
import ToggleComponent from './components/lifecyclewitheffect/togglecomponent';
import AjaxCallComponent from './components/useeffectajaxcomponent/ajaxcallcomponent';
import UseCustomHookReducerComponent from './components/cusomhookusereducer/usecustomhookcomponent';
import ContainerComponent from './components/errorchecks/simpleerrorcheckcomponent';
import ContainerComponentWithErrorBoundary from './components/errorchecks/errorcondarycomponent';
import ListDepartmentsComponent from './components/routingapp/listdepartmentscomponent';
import EventTestComponent from './componentfortest/eventtestcomponent';
// Importing Bootstrap css
import  './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import MainRouterComponent from './components/routingapp/mainroutercomponent';
import CodeSplitComponent from './components/codesplitiing/codesplittingcomponent';
import LazyComponent from './components/lazyloadingcomponent/loazyloadedcomponent';
import HelloTestComponent from './componentfortest/hellotestcomponent';
// Point to the <div> rag in index.html that is present
// in the public
const root = ReactDOM.createRoot(document.getElementById('root'));
// The App Component will be rendered
// Mount the Out HTML generated from returned DOM
// of the Component in the 'root' element 
const Message= 'WelCome';
root.render(
  <React.StrictMode>
     <EventTestComponent></EventTestComponent>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

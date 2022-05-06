import styles from '../styles/Home.module.css'
import React, {useState} from 'react';
import {useRouter} from 'next/router';
import Navigator from './components/navigator';
export default function Home() {

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [res, setRes] = useState(0);
  const  [queryValue,setValue] = useState(0);

  // define a router reference
  const router = useRouter();
  
  const click=()=>{
    setRes(x+y);
  };

  // explicitly navigate to the home along with query parameter
  const navigate=()=>{
     router.push({
       pathname:'/components/home', // component/home?pValue=[VALUE-OF-queryValue]
       query:{
          pValue: queryValue
       }
     })
  };


  return (
    <div className={styles.container}>
        X:<input type="text" value={x} onChange={(evt)=>setX(parseInt(evt.target.value))}/>
        <br/>
        Y:<input type="text" value={y} onChange={(evt)=>setY(parseInt(evt.target.value))}/>
        <br/>
        Result:<input type="text" value={res} readOnly/>
        <br/>
        <input type="button" value="Add" onClick={click}/>
        <hr/>
        <Navigator></Navigator>
        <hr/>
        <input type="text" value={queryValue} onChange={(evt)=>setValue(parseInt(evt.target.value))}/>
        <br/>
        <button onClick={navigate}>Navigate</button>
    </div>
  )
}

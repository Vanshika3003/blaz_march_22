import styles from './../../styles/Home.module.css';
import {useState,useEffect} from 'react';
import {useRouter} from 'next/router';
import Navigator from './navigator';
const HomeComponent=()=>{
    const [value,setValue] = useState(0);
    // read the value when the component is loaded (but post rendering)
    // define the route reference
    const router = useRouter();
    useEffect(()=>{
        setValue(router.query.pValue);
    },[]);
    return (
        <div className={styles.container}>
            <Navigator></Navigator>
            <h2>The Home Component</h2>
            <div>
                <strong>
                    Received value from route query is = {value} 
                </strong>
            </div>
        </div>
    );
};

export default HomeComponent;
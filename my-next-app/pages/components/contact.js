import styles from './../../styles/Home.module.css';
import Navigator from './navigator';
const ContactComponent=()=>{
    return (
        <div className={styles.container}>
            <Navigator></Navigator>
            <h2>The Contact Component</h2>
        </div>
    );
};

export default ContactComponent;
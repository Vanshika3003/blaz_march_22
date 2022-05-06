import styles from "./../../styles/Home.module.css";
import Navigator from "./navigator";
// component with props object
const AboutComponent = ({ departments }) => {
  if (departments === undefined || departments.length === 0) {
    return (
      <div className={styles.container}>
        <Navigator></Navigator>
        <h2>The About Component</h2>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <Navigator></Navigator>
        <h2>The About Component</h2>
         <div>
             <strong>
                 Received Data:
                 <br/>
                 {JSON.stringify(departments)}
             </strong>
         </div>
      </div>
    );
  }
};

// the following method will be executed during build
export async function getStaticProps() {
  console.log(`Making an AJAX Call`);

  let response = await fetch("http://localhost:7011/api/departments");
  const departments = await response.json();
  console.log(`Received data = ${JSON.stringify(departments)}`);
  return {
    props: {
      departments,
    },
  };
}

export default AboutComponent;

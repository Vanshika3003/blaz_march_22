import styles from './../../styles/Home.module.css';
import Link  from 'next/link';
const Navigator=()=>{
   return(
       <div className={styles.container}>
           <table className={styles.table}>
               <tbody>
                   <tr>
                       <td className={styles.td}>
                           <Link href="/">
                               <a>Index</a>
                           </Link>
                       </td>
                       <td className={styles.td}>
                           <Link href="/components/home">
                               <a>Home</a>
                           </Link>
                       </td>
                       <td className={styles.td}>
                           <Link href="/components/about">
                               <a>About</a>
                           </Link>
                       </td>
                       <td className={styles.td}>
                           <Link href="/components/contact">
                               <a>Contact</a>
                           </Link>
                       </td>
                   </tr>
               </tbody>
           </table>
       </div>
   );
};

export default Navigator;
import { useState } from "react"
import styles from "../styles/Layout.module.css"

export default function Layout({children}) {
    
    const [isOpen, setIsOpen] = useState(false);
    const openmenu = ( )=> setIsOpen (!isOpen);
    return <>
          <header className={styles.header}>
        <nav className={styles.navbar}>
            <a className={styles.navlogo}>[Logo do Observatório]</a>
          <ul className={isOpen === false ? styles.navmenu : styles.navmenu +" "+ styles.active}>
            <li className={styles.navitem}>
                <a className={styles.navlink} href="/">Home</a>
            </li>
            <li className={styles.navitem}>
              
                <a className={styles.navlink} href='/about'>Sobre Nós</a>
       
            </li>
            <li className={styles.navitem}>
           
                <a className={styles.navlink}>Cursos</a>
      
            </li>
            <li className={styles.navitem}>
           
           <a className={styles.navlink}>Contato</a>
 
       </li>
          </ul>
          <button className={isOpen === false ? styles.hamburger : styles.hamburger +" "+ styles.active}
                    onClick={openmenu}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </nav>
      </header>
    {children}</>
}
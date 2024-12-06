import Link from "next/link"
import styles from './Header.module.css'
import Image from "next/image"


export default function Header(){
    return (
        <header className={styles.header}>
            <button className={styles.botao}><Image src='/images/menu-aberto.png' width={40} height={40} alt="menu"></Image></button>
            <nav className={styles.nav}>
                <ul className={styles.lista}>

                    <li className="li">
                        <Link className={styles.link} href="/">Home</Link>
                    </li>
                    <li>
                        <Link  href='/FMAB'>Eduardo</Link>
                    </li>
                    <li>
                        <Link href=''>Dotor Preda</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
const FMAB = () => {
    return (
        <main>
            <h1>Página FMAB</h1>
            <div>
                <h1 className={styles.h1}>eduardo olhando pra frente e afonso olhando pro eduardo oval no meio</h1>
                <Image className={styles.img} src='/images/44071bb75e4a15a92bfc61c4d017fa38d423b4121e4f2c220efd9f34ce17aedd._SX1080_FMjpg_.jpg' width={800} height={500} alt="eduardo"></Image>
                <h1 className={styles.h1}>eduardo olhando po ladinho bolado OVAL</h1>
                <Image className={styles.img} src='/images/legiao_1qFLnw3kdQlH.webp' width={800} height={500} alt="eduardo"></Image>
            </div>
        </main>
    )
}
import styles from './FMAB.module.css'
import Image from "next/image";
export default FMAB;

import styles from "./style.module.css"

export default function ContainerImages({imgEx1, imgEx2, imgEx3, imgEx4, Hobb1, Hobb2, Hobb3, Hobb4}) {
    return (
        <div className={styles.containerImg}>
            <img src={imgEx1} alt={Hobb1} className={styles.img}/>
            <img src={imgEx2} alt={Hobb2} className={styles.img}/>
            <img src={imgEx3} alt={Hobb3} className={styles.img}/>
            <img src={imgEx4} alt={Hobb4} className={styles.img}/>
        </div>
    )
}
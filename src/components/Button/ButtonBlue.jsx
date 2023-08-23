import styles from "./style.module.css"

export default function ButtonBlue({button}) {
    return (
        <button className={styles.btnBlue}>{button}</button>
    )
}
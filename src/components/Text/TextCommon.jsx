import styles from "./style.module.css"

export function TextCommon({textP}) {
    return (
        <p className={styles.common}>{textP}</p>
    )
}
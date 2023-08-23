import styles from "./style.module.css"

export default function NumberSection({numbSection}) {
    return (
        <span className={styles.numberSection}>{numbSection}</span>
    )
}
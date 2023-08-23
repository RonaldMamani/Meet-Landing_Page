import styles from "./style.module.css"

export default function TextSection({textSect}) {
    return (
        <p className={styles.textSection}>{textSect}</p>
    )
}
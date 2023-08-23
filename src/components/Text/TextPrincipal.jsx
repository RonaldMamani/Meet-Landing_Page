import styles from "./style.module.css"

export default function TextPrincipal({textPrinc}) {
    return (
        <h2 className={styles.principal}>{textPrinc}</h2>
    )
}
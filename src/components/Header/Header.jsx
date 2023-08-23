import styles from "./style.module.css"

export default function Header({imgLogo, logo}) {
    return (
        <header className={styles.header}>
            <img src={imgLogo} alt={logo} />
        </header>
    )
}
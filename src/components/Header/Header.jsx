import logo from '../../assets/img/nu-kenzie-logo.svg'
import styles from './style.module.scss'

export const Header = () => {
    return (
        <header className={styles.appHeader}>
            <img className={styles.logo} src={logo} alt="" />
        </header>
    )
}
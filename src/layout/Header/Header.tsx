import styles from './Header.module.sass'
import logo from '../../assets/logo.svg'

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <img className={styles.logo} src={logo} alt="Логотип компании Газпронефть" />
                <nav>
                    <ul className={styles.list}>
                        <li><a className={styles.link} href="https://docs.google.com/document/d/1BCe2Ze4lg3JIc9A83Hh50hvFooVNU28ASZAsj-IbrUk/edit?usp=sharing" target='_blank'>Текст задания</a></li>
                        <li><a className={styles.link} href="https://github.com/gazievri/gazpromneft" target='_blank'>Репозиторий</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

import styles from './Main.module.sass'
import { Table } from '../../components/Table/Table'

export const Main: React.FC = () => {
    return (
        <main className={styles.main}>
            <Table />
        </main>
    )
}
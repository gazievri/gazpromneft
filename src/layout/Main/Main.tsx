import styles from './Main.module.sass'
import { Table } from '../../components/Table'
import { Modal } from '../../components/Modal'

export const Main: React.FC = () => {
    return (
        <main className={styles.main}>
            <Table />
            <Modal />
        </main>
    )
}
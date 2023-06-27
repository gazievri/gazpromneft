import styles from './Main.module.sass'
import { Table } from '../../components/Table/Table'
import { Modal } from '../../components/Modal/Modal'

export const Main: React.FC = () => {
    return (
        <main className={styles.main}>
            <Table />
            <Modal />
        </main>
    )
}
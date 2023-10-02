import { FinanceForm } from '../FinanceForm/FinanceForm'
import { Total } from '../Total/Total'
import styles from './style.module.scss'

export const DefaultTemplate = ({noteList, addNote}) => {
    return (
        <section className={styles.financeContainer}>
            <FinanceForm addNote={addNote}/>
            <Total noteList={noteList}/>
        </section>
    )
}
import { FinanceCard } from '../../fragments/FinanceCard/FinanceCard'
import styles from './style.module.scss'

export const FinanceList = ({noteList, removeNote}) => {
    
    return (
        <section className={styles.summaryContainer}>

            <h3 className="title3">Resumo financeiro</h3>
            <ul>
                {noteList.map(note => {
                    const {description, value, valueType, id} = note;

                    return (<FinanceCard key={id} id={id} description={description} value={value} valueType={valueType} removeNote={removeNote} />)

                })}
                
            </ul>

        </section>
        
    )
}
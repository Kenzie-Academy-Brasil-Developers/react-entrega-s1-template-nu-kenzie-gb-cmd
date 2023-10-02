import styles from './style.module.scss';

export const FinanceCard = ({description, value, valueType, id, removeNote}) => {

    const currentValue = Number(value);
    const typeOfValue = valueType[0].toUpperCase() + valueType.substring(1);
   
    return (
        <li className={styles.summaryCard}>
            <div className={styles.cardInfo}>
                <span className={valueType === "saida" ? styles.outputValue : styles.inputValue}></span>
                
                <div className={styles.cardContainer}>
                    <div className={styles.infoContainer}>
                        <h3 className="title3">{description}</h3>
                        <small className="body">{typeOfValue}</small>
                    </div>

                    <div className={styles.valueDeleteContainer}>
                        <p className="body">{currentValue.toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}</p>
                        <button onClick={() => removeNote(id)}>Excluir</button>
                    </div>
                </div>
            </div>
            
        </li>
    )
}
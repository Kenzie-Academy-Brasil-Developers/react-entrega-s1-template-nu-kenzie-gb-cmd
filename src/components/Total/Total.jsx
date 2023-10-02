import styles from './style.module.scss'

export const Total = ({noteList}) => {

    const inputValueList = noteList.filter(inputValue => {
        if(inputValue.valueType === "entrada") {
            return inputValue
        }
    });

    const totalInputValue = inputValueList.reduce((accumulator, number) => {
        return accumulator + number.value;
    }, 0)

    const outputValueList = noteList.filter(outputValue => {
        if(outputValue.valueType === "saida") {
            return outputValue
        }
    });

    const totalOutputValue = outputValueList.reduce((accumulator, number) => {
        return accumulator + number.value;
    }, 0)

    const currentBalance = totalInputValue - totalOutputValue

    // .toLocaleString("pt-BR", {style:"currency", currency:"BRL"})

    return (
        <div className={styles.totalContainer}>
            <div className={styles.totalValueContainer}>
                <p className="title3">Valor total:</p>
                <p className="title3 title3--currentBalance">{currentBalance.toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}</p>
            </div>
            <small className="body">O valor se refere ao saldo</small>
        </div>
    )
}
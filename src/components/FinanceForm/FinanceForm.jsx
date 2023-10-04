import { useState } from 'react'
import styles from './style.module.scss'

export const FinanceForm = ({addNote}) => {

    const [ description, setDescription ] = useState("")
    const [ value, setValue ] = useState("")
    const [ valueType, setValueType ] = useState("entrada")
    
    const submit = (e) => {
        e.preventDefault();
        const stringToNumber = Number(value)

        if(description !== "" && value !== "") {
            
            addNote(description, stringToNumber, valueType);
            setDescription("");
            setValue("");
        }

    }

    return (
        <form className={styles.formContainer} onSubmit={submit}>
            <div className={styles.descriptionContainer}>
                <label className="title4">Descrição</label>
                <input 
                    className={styles.inputBox} 
                    type="text" 
                    placeholder="Digite aqui sua descrição" 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <small className="body">Ex: Compra de roupas</small>
            </div>

            <div className={styles.valueContainer}>
                <label className="title4">Valor &#40;R$&#41;</label>
                <input 
                    className={styles.inputBox} 
                    type="text" 
                    placeholder="1"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>

            <div className={styles.typeOfValueContainer}>
                <label className="title4">Tipo de valor</label>
                <select value={valueType} onChange={(e) => setValueType(e.target.value)}className={`${styles.valueTipe} ${styles.inputBox}`}>
                    <option value="entrada">Entrada</option>
                    <option value="saida">Saída</option>
                </select>
            </div>
            
            
            <button className={`headline ${styles.btn}`}>Inserir valor</button>
        </form>
    )
}
import { DefaultTemplate } from '../DefaultTemplate/DefaultTemplate'
import { FinanceList } from '../FinanceList/FinanceList'

export const Main = ({noteList, addNote, removeNote}) => {

    return (
        <main>
            <DefaultTemplate noteList={noteList} addNote={addNote}/>
            <FinanceList noteList={noteList} removeNote={removeNote}/>
        </main>
    )
}
import { useState } from 'react'
import reactLogo from './assets/img/react.svg'
import viteLogo from '/vite.svg'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import './styles/reset.scss'
import './styles/globalStyles.scss'
import './styles/typography.scss'

function App() {

  const [noteList, setNoteList] = useState([])

  const addNote = (description, value, valueType) => {
    const id = crypto.randomUUID()
    const newNote = {description, value, valueType, id}
    setNoteList([...noteList, newNote]);
  }

  const removeNote = (id) => {
    const filteredList = noteList.filter(note => {
      if(note.id !== id) {
        return note
      }
    });

    setNoteList(filteredList);
  }

  return (
    <>
      <div>
        <Header/>
        <Main noteList={noteList} addNote={addNote} removeNote={removeNote}/>
      </div>
    </>
  )
}

export default App

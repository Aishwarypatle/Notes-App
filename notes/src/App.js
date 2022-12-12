import React from "react";
import NotesList from "./components/NotesList";
import { useState ,useEffect } from "react";
import {nanoid} from 'nanoid'
import Search from "./components/Search";
import Header from "./components/Header";
const App = ()=>
{
  const [notes , setNotes] = useState([
    {
      id:nanoid(),
      text:'This is my first note',
      date:'01-01-2001'
    },
    {
      id:nanoid(),
      text:'This is my second note',
      date:'02-01-2001'
    },
    {
      id:nanoid(),
      text:'This is my third note',
      date:'03-01-2001'
    },
    {
      id:nanoid(),
      text:'This is my fourth note',
      date:'04-01-2001'
    },
    {
      id:nanoid(),
      text:'This is my fifth  note',
      date:'05-01-2001'
    }

  ])

  const addNote = (text) =>
  {
    const date = new Date();
    const newNote = {
      id:nanoid(),
      text:text,
      date:date.toLocaleDateString(),
    }

    const newNotes = [...notes , newNote];
    setNotes(newNotes);
  }


  const deleteNote = (id) =>
  {
      const newNotes = notes.filter((note)=> note.id !== id);
      setNotes(newNotes);
  }

  const [searchText , setSearchText] = useState('');
  const [darkMode , setDarkMode] = useState(false);

  useEffect(()=>
  { 
      const savedData = JSON.parse(
        localStorage.getItem('react-notes-app-data')
      )

      if(savedData)
      {
        setNotes(savedData);
      }
  },[])

  useEffect(()=>
  {
      localStorage.setItem(
        'react-notes-app-data',
        JSON.stringify(notes)
      )
  },[notes]);

  return(
    <>
      <div className={`${darkMode && 'dark-mode'}`}>
          <div className="container">
            <Header handleToggleDarkMode={setDarkMode} />
            <Search handleSearchNote={setSearchText} />
            <NotesList
            notes={notes.filter(

              (note)=>note.text.toLowerCase().includes(searchText)

              )} 
            handleAddNote={addNote} 
            handleDeleteNote={deleteNote}
            />
          </div>
      </div>
    </>
  )
}

export default App;
import React from "react";
import NotesList from "./components/NotesList";
import { useState } from "react";
import {nanoid} from 'nanoid'
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
      date:date.toLocaleDateString
    }

    const newNotes = [...notes , newNote];
    setNotes(newNotes);
  }


  const deleteNote = (id) =>
  {
      const newNotes = notes.filter((note)=> note.id !== id);
      setNotes(newNotes);
  }

  return(
    <>
      <NotesList
       notes={notes} 
       handleAddNote={addNote} 
       handleDeleteNote={deleteNote}
      />
    </>
  )
}

export default App;
import React from "react";
import Notes from "./Notes";
import AddNote from "./AddNote";

const NotesList = ({notes , handleAddNote ,handleDeleteNote }) =>
{
    return(
        <> 

            <div className="container">
                <div className="notes-list">
                    {notes.map((note)=> 
                    (
                      <Notes  
                        id={note.id}
                        text={note.text} 
                        date={note.date}
                        handleDeleteNote={handleDeleteNote}
                    />
                    ))}
                    
                    <AddNote handleAddNote={handleAddNote}/>
            
                </div>
            </div>
        </>
    )
}


export default NotesList
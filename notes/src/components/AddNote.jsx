import { useState } from "react"

const AddNote = ({handleAddNote})=>
{

    const [noteText , setNoteText ] = useState('');
    const charLimit = 200;


    const handleChange = (event)=>
    {
           if(charLimit - event.target.value.length >= 0)
           {
            setNoteText(event.target.value);
           }
    }

    const handleSaveNote =() =>
    {
        if(noteText.trim().length > 0) 
        {
            handleAddNote(noteText);
            setNoteText('');
        }
        else
        {
            alert('Please type something to add note')
        }
    }
    return (
        <>
            <div className="note new">
                <textarea 
                rows={6}
                cols='9'
                placeholder='Type to add note....'
                onChange={handleChange}
                value={noteText}
                >
                </textarea>

                <div className="note-footer">
                    <small>{charLimit - noteText.length} remaining</small>
                    <button onClick={handleSaveNote} className="save">Save</button>

                </div>

            </div>
        </>

    )
}

export default AddNote
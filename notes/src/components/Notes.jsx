import {MdDeleteForever} from 'react-icons/md'


const Notes = ({id,text,date,handleDeleteNote}) =>
{
    return (
        <>
            <div className='note'>
                <span> {text}</span>
                <div className='note-footer'>
                    <small>{date}</small>
                    <MdDeleteForever onClick={()=>handleDeleteNote(id)} className='delete-icon' size='1.5rem'/>

                </div>
            </div>
        </>
    )
}


export default Notes
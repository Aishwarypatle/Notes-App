import {MdDeleteForever} from 'react-icons/md'


const Notes = () =>
{
    return (
        <>
            <div className='note'>
                <span> Heyyy! This is our first note</span>
                <div className='note-footer'>
                    <small>26-04-2001</small>
                    <MdDeleteForever className='delete-icon' size='1.3em'/>

                </div>
            </div>
        </>
    )
}


export default Notes
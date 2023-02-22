import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NotesAppBar } from './NotesAppBar';
import { useForm } from '../../hooks/useForm';
import { activeNote, StartDeleting } from '../../actions/notes';

export const NoteScreen = () => {

    const dispatch = useDispatch();

    const { active: note } = useSelector( state => state.notes);

    /// only reset one time 
    const [formValues, handleInputChange, reset ] = useForm( note );

    const { body, title, id } = formValues;

    // this value not rebuild component
    const activeId = useRef( note.id );

    useEffect(() => {
        
        if( note.id !== activeId.current) {
            reset( note );
            activeId.current = note.id;
        }
        
    }, [note, reset])


    useEffect(() => {

        dispatch( activeNote( formValues.id, {...formValues }) );

    }, [formValues, dispatch])
    


    const handleDelete = () => {
        dispatch( StartDeleting(id) );
    }




  return (
    <div className='notes__main-content'>
        <NotesAppBar/>
        <div className='notes__content'>
            <input
                type='text'
                placeholder='Some awesome title'
                className='notes__title-input'
                autoComplete='off'
                name='title'
                value={ title }
                onChange= { handleInputChange }
            >


            </input>

            <textarea
                placeholder='what happend today'
                className='notes__textarea'
                name='body'
                value={ body }
                onChange= { handleInputChange }
            ></textarea>
            
            {
                note.url &&
                <div className='notes__image'>
                    <img
                        src={ note.url }
                        alt='cover'
                    >
                    </img>
                </div>
            }

        </div>

        <button
            className='btn btn-danger'
            onClick={ handleDelete }
        >
            Delete
        </button>
    </div>
  )
}

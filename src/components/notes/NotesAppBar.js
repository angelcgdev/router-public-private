import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote, StartUploading } from '../../actions/notes';




export const NotesAppBar = () => {

  const dispatch = useDispatch();
  
  const { active } = useSelector( state=> state.notes);
  
  const handleSave = () => {
    console.log(active);
    dispatch( startSaveNote( active) )
  }

  const handlePictureclick = ()=> {
    document.querySelector('#fileSelector').click();
  }
  const handleFileChange = (e)=> {
    const file = e.target.files[0];

    if(file ){
      dispatch( StartUploading( file ) );
    }
  }

  return (
    <div className='notes_appbar'>
        <span>28 august 2020</span>
        <input
        id='fileSelector'
          type='file'
          name='file'
          style={{ display: 'none'}}
          onChange={ handleFileChange }
        />
        <div>
            <button
              className='btn'
              onClick={ handlePictureclick }
            >
                Picture
            </button>
            <button className='btn' onClick={handleSave}>
                Save
            </button>
        </div>
    </div>
  )
}

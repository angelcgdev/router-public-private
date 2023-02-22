import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth';
import { noteLogout, startNewNote } from '../../actions/notes';
import { JournalEntries } from './JournalEntries'

export const SideBar = () => {

  const dispatch = useDispatch();

  const { name } = useSelector( state => state.auth);

  const handleLogout = ()=> {
    // dispatch( noteLogout() )
    dispatch( startLogout() )

  }


  const handleAddNew = ()=> {
    dispatch( startNewNote() );

  }

  return (
    <aside className='journal__sidebar'>

        <div className='journal__sidebar-navbar'>
            <h3 className='mt-5'>
                <i className="fa-solid fa-moon"></i>
                <span> { name }</span>
            </h3>

            <button
              className='btn'
              onClick={handleLogout}
            >
                Logout
            </button>
        </div>

        <div
          className='journal__new-entry'
          onClick={ handleAddNew }
        
        >
          <i className="fa-solid fa-calendar fa-x3"></i>
          <p className='mt-5'>
            New Entry
          </p>
        </div>

        <JournalEntries/>
    </aside>
  )
}

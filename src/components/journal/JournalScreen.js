import React from 'react'
import { useSelector } from 'react-redux'
import { NoteScreen } from '../notes/NoteScreen'
import { NothinSelected } from './NothinSelected'
import { SideBar } from './SideBar'

export const JournalScreen = () => {

  const { active } = useSelector( state=>state.notes);

  return (
    <div 
      className='journal__main-content animate__animated animate__fadeIn animate__faster'
    >
      <SideBar />
      <main>
        {
          (active)
          ?<NoteScreen/>
          :<NothinSelected/>
        }
      </main>
    </div>
  )
}

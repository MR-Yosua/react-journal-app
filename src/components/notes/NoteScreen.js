import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content" > 
            
            <NotesAppBar/>

            <div className ="notes__content">

                <input 
                type="text"
                placeholder="Add title"
                className="notes__title-input"
                autoComplete="off"
                />
            
                <textarea 
                    placeholder="What happened today?"
                    className="notes__textarea"
                    autoComplete="off"
                ></textarea>

                <div className = "notes__image">

                    <img 
                        src ="https://www.mordeo.org/files/uploads/2020/05/Windows-10-Logo-Dark-Background-4K-Ultra-HD-Mobile-Wallpaper.jpg"
                        alt="img"
                    />

                </div>

            </div>

        </div>
    )
}

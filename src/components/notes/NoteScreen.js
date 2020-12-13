import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote, startDeleteNote } from '../../actions/notes'
import { useForm } from '../../hooks/useForm'
import { NotesAppBar } from './NotesAppBar'
import  Swal from 'sweetalert2';
export const NoteScreen = () => {

    const {active:note} = useSelector(state => state.notes)
    const [formValues,handleInputChange,reset] = useForm(note);
    const {body,title,id} = formValues;

    const dispatch = useDispatch();

    const activeId = useRef(note.id);

    useEffect(() => {
        
        if(note.id !== activeId.current){
            reset(note);
            activeId.current = note.id;
        }
    }, [note,reset])


    useEffect(() => {
        
        dispatch(activeNote(formValues.id,{...formValues}));
        
    }, [formValues,dispatch])


    const handleDelete = () =>{

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your note has been deleted.',
                'success'
              )
              
              dispatch(startDeleteNote(id));
            }
          });

    }


    return (
        <div className="notes__main-content" > 
            
            <NotesAppBar/>

            <div className ="notes__content">

                <input 
                type="text"
                placeholder="Add title"
                className="notes__title-input"
                autoComplete="off"
                name= "title"
                value={ title}
                onChange={handleInputChange}
                />
            
                <textarea 
                    placeholder="What happened today?"
                    className="notes__textarea"
                    autoComplete="off"
                    name= "body"
                    value={body}
                    onChange={handleInputChange}
                ></textarea>

                {
                    (note.url) &&
                    (<div className = "notes__image">

                        <img 
                            src ={note.url}
                            alt="img"
                        />
                    </div>)
                }

            </div>

           
            <button
            className="btn-danger"
            onClick ={handleDelete}
            >
                Delete    
            </button> 
        </div>
    )
}

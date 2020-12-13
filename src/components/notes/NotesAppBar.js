import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNotes, startUploading } from '../../actions/notes'
import moment from 'moment';
import 'moment/locale/es';

export const NotesAppBar = () => {
    
    const dispatch = useDispatch();
    const {active} = useSelector(state => state.notes)
    const actualDate = moment().format('dddd D MMMM');
    

    const handleSave = () => {
        
        dispatch(startSaveNotes(active));        
    }

    const handlePictureClick = () => {
        document.querySelector('#fileselector').click();
    }


    const handleFileChange = (e) => {
        const file = (e.target.files[0]);
        if(file){
            dispatch(startUploading(file));
        }
    }

    return (
        <div className="notes__appbar ">
            <span>{actualDate}</span>

            <input 
                id = "fileselector"
                type="file"
                style={{display:'none'}}
                onChange= {handleFileChange}
            />

            <div>
                <button 
                    className="btn"
                    onClick = {handlePictureClick}
                >
                    Picture 
                </button>

                <button 
                className="btn"
                onClick={handleSave}
                >
                    Save 
                </button>

            </div>

        </div>
    )
}

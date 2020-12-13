import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';
import 'moment/locale/es';


export const JournalEntry = ({id,date,title,body,url}) => {

    
    const dispatch = useDispatch();

    const noteDate = moment(date);

    const handleEntryClick = () => {
        dispatch(activeNote(id,{
            date,title,body,url
        }));
    }

    return (
        <div 
        className="journal__entry animate__animated animate__fadeIn animate__faster"
        onClick={handleEntryClick}
        >
            
            {
                url &&
                <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: `url(${url})`
                }}
                >
                </div>
            }

            <div className ="journal__entry-body">

                <p className ="journal__entry-title">
                    { title}
                </p>

                <p className ="journal__entry-content">
                     {body}
                </p>

            </div>

            <div className ="journal__entry-date-box">
        <span>{noteDate.format('MMMM')}</span>
                <h4>{noteDate.format('e')}</h4>
            </div>

        </div>
    )
}

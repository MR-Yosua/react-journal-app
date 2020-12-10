import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry">
            
            <div 
            className="journal__entry-picture"
            style={{
                backgroundSize: 'cover',
                backgroundImage: 'url(https://www.crecemujer.cl/sites/default/files/styles/medium/public/como_hacer_para_marcar_la_diferencia_con_tu_competencia_13.jpg?itok=lEW11gYS)'
            }}
            >
            </div>

            <div className ="journal__entry-body">

                <p className ="journal__entry-title">
                    Dia pelito
                </p>

                <p className ="journal__entry-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </p>

            </div>

            <div className ="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>

        </div>
    )
}

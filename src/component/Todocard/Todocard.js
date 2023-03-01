import React from 'react'
import "./Todocard.css"

function Todocard({title,description}) {
    return (
        <div>
            <div className='card-Heading'>{title}</div>
            <div className='card-body'>{description}</div>
        </div>
    )
}

export default Todocard
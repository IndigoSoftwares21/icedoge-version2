import React from 'react'
import '../team.css'
const Personcard = (props) => {
  return (
    <div className='person-card'>
        <div className="person-image-holder">
            <img src={props.img} alt="person" />
        </div>
        <div className='person-details'>
            <h1>{props.name}</h1>
            <p>{props.title}</p>
            <br />
            <p style={{
                opacity:'0.6'
            }}>{props.description}</p>
        </div>

    </div>
  )
}

export default Personcard
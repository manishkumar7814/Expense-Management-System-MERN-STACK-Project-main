import React from "react"
import "./Testimonial.css"

const Card = (props) => {
  return (
    <>
      <div className='box'>
        <i className='fa fa-quote-left'></i>
        
        <hr />
        <div className='details flex '>
          <div className='img'>
            <img src={props.profile} alt='' />
          </div>
          <div className='name'>
            <h3>{props.name}</h3>
            <span>{props.post}</span>
          </div>
        </div>
        <div className='para'>
          <p>{props.desc}</p>
        </div>
      </div>
    </>
  )
}

export default Card
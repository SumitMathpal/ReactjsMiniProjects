import React from 'react'

const Card = (props) => {
  return (
    <div>
      <input type="text" name={props.name}  onChange={(e)=>props.setName(e.target.value)} value={props.name}/> 
      
    </div>
  )
}

export default Card

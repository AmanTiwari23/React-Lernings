import React from 'react'

export const College = (props) => {
  return (
   <>
   
   <h3>Student name : {props.name}</h3>
   <h4>student Rollnumber :{props.roll}</h4>
   <h4>Student class : {props.cls}</h4>
   <h5>subject fee : {props.fee}</h5>
   </>
  )
}

export default College;

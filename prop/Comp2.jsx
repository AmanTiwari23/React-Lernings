import React from 'react'
import Comp3 from './Comp3'

const Comp2 = ({user}) => {
  return (
    <>
    <div>Comp2</div>
    <Comp3 user={user} />
    </>
    
  )
}

export default Comp2
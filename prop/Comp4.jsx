import React from 'react'
import Comp5 from './Comp5'

const Comp4 = ({user}) => {
  return (
     <>
    <div>Comp4</div>
    <Comp5 user={user} />
    </>
    
  )
}

export default Comp4
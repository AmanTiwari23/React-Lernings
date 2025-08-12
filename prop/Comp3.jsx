import React from 'react'
import Comp4 from './Comp4'

const Comp3 = ({user}) => {
  return (
    <>
       <div>Comp3</div>
       <Comp4 user={user} />
       </>
       
  )
}

export default Comp3
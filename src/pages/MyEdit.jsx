import React from 'react'
import { useParams } from 'react-router-dom';

const MyEdit = () => {

    const {id}=useParams();
  return (
    <>
    <h1>Edit Record : {id}</h1>
    </>
  )
}

export default MyEdit;
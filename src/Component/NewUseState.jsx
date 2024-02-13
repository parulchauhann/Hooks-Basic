import React, { useEffect, useState } from 'react'
import '../App.css'

function NewUseState(props) {

    const [state, setState] = useState(" ")
    const [like, setLike] = useState(0)

    const handleState = () =>{
        setState(state=>state==" "?props.content:" ")
    }

    const handleLike = () => {
        setLike(like=>like+1)
    }

    useEffect(()=>{
        alert("Content button clicked");
    },[state])

  return (
    <div>
        <h3>{state}</h3>
        <button onClick={handleState}>Content</button>
        <h4>{like}</h4>
        <button onClick={handleLike}>Like</button>
    </div>
  )
}

export default NewUseState
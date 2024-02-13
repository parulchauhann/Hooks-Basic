import React, { useContext } from 'react'
import { theme } from '../App'
import NewUseState from './NewUseState'
import '../App.css'

function Child1() {
    const themeContext = useContext(theme)
    const style = {
        backgroundColor: themeContext ? "black" : "grey",
        height : "30vh",
        width : "100vw"
    }
    const content = "Sometimes we make the process more complicated than we need to. We will never make a journey of a thousand miles by fretting about how long it will take or how hard it will be. We make the journey by taking each day step by step and then repeating it again and again until we reach our destination."
  return (
    <div className='text' style = {style}>
        <NewUseState content = {content} />
    </div>
  )
}

export default Child1
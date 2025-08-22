import React from 'react'
import ReactDOM from 'react-dom'

const Modal = ({children}) => {
    let modalRoot = document.getElementById("modal")
  return ( ReactDOM.createPortal(children,modalRoot)
    
  )
}

export default Modal
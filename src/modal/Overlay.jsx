import React, { useEffect, useContext, useRef, useState } from 'react'
import "./Overlay.css"
import { PasswordContext } from '../store/PasswordContext'
const Overlay = ({editItem,setData,setEditItem}) => {
    let { passwordHandle,inputRef,passwordRef ,handleInput,setAddPassword} = useContext(PasswordContext)
   
     useEffect(() => {
    if (editItem) {
      inputRef.current.value = editItem.title
      passwordRef.current.value = editItem.password
    } else {
      inputRef.current.value = ""
      passwordRef.current.value = ""
    }
  }, [editItem])
   let handleSave = () => {
    if (editItem) {
      // agar edit mode hai to update karo
      setData((pre) =>
        pre.map((el) =>
          el.id === editItem.id
            ? { ...el, title: inputRef.current.value, password: passwordRef.current.value }
            : el
        )
      )
      setEditItem(null) // reset edit mode
    } else {
      handleInput()
    }
       // passwordHandle(false)
       setAddPassword(false)
  }
  return (
      <div className='overlay'>
          <div className='modal'>
              <label htmlFor="">Title :</label>
              <input type="text" ref={inputRef} name="" id="" />
              <br />
              <br />
              <label htmlFor="">Passord</label>
              <input type="text" ref={passwordRef} name="" id="" />
              
               <br /> <br />
              <div className='btn_container'>
                  <button onClick={handleSave}>Add </button>
                  <button onClick={passwordHandle}>X</button>
              </div>
              
          </div>
      
      </div>
  )
}

export default Overlay
import React, { useContext,useState,useEffect } from 'react'
import { PasswordContext } from '../store/PasswordContext'

const Theme = () => {
     let [theme, setTheme] = useState(false);
    console.log(theme)
     useEffect(() => {
    document.body.style.backgroundColor = theme ? "Purple" : "teal";
    document.body.style.color = theme ? "black" : "";
  }, [theme]);
    
    let handleTheme = () => {
        setTheme((pre) => !pre)
       
    }
   
  return (
   <button
  onClick={handleTheme}
  style={{
    top: "10px",
    right: "10px",
    position: "fixed",
    fontSize: "24px",
    borderRadius: "50%",
    cursor: "pointer",
   border:"none",
    background: "transparent",
    padding: "10px",
    width: "50px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 8px ",
    transition: "all 0.3s ease"
  }}
  
>
  {theme ? "☀️" : "🌙"}
</button>

  )
}

export default React.memo(Theme)
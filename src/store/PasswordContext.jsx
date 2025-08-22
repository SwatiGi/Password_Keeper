import { createContext, useState,useRef } from "react"

export let PasswordContext = createContext()


export let ContextProvider = ({ children }) => {
    
    let [addPassword, setAddPassword] = useState(false)
     let [data, setData] = useState([]);
     let inputRef = useRef();
    let passwordRef = useRef();
    let handleInput = () => {
        if(inputRef.current.value===""||passwordRef.current.value==="")return
        setData((pre) => [...pre, {
            title: inputRef.current.value,
            password: passwordRef.current.value,
            id : Date.now()
        }])
        setAddPassword(false)
       console.log(data)
    }
    let passwordHandle = () => {
        setAddPassword((pre) => !pre)
        console.log(addPassword)
    }
    
   return <PasswordContext.Provider value={{addPassword,passwordHandle,inputRef,passwordRef,handleInput,data,setData,setAddPassword}}>
    {children}
    </PasswordContext.Provider>
    
}
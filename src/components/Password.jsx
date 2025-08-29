import React, { useContext, useState } from 'react'
import { PasswordContext } from '../store/PasswordContext'
import Overlay from '../modal/Overlay'

const Password = () => {
    let { addPassword, passwordHandle, data, setData } = useContext(PasswordContext)
    let [editItem, setEditItem] = useState(null);
    let [searchTitle ,setSearchTitle] = useState("")
    let handleDelete = (id) => {
        setData((pre) => pre.filter((el) => el.id !== id));
        // data.filter((el)=>el.id!==id)
    console.log(id)
    }
    let handleEdit = (item) => {
        setEditItem(item)
        passwordHandle()
    }
  return (
      <><div style={{border:"1px solid black" ,width:"60%" ,margin:"auto" ,padding:"20px" ,boxShadow:"0px 0px 10px" ,borderRadius:"20px",marginTop:"50px"}}>
          <h1>Password Keeper</h1>
          
          <p >Total password : {data.length}</p>
          {addPassword&& <Overlay
    editItem={editItem}
    setData={setData}
    setEditItem={setEditItem}
  />}
          <button 
  onClick={passwordHandle}
  style={{
    background: "transparent",
    border: "2px double #333",   // double border
    padding: "8px 16px",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer"
  }}
>
  Add New Password
</button>
          <br />
          <br />
     <input
  type="text"
  placeholder="search..."
  value={searchTitle}
  onChange={(e) => setSearchTitle(e.target.value)}
  style={{
    padding: "8px 12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
    outline: "none",
    width: "200px",
  }}
/>

      </div>
          <h1 style={{textAlign:"center"}}>All Password </h1>
          {data
  .filter((el) =>
    el.title.toLowerCase().includes(searchTitle.toLowerCase())
  ).map((el) => {
              return <div key={el.id} style={{border:"1px solid" ,padding:"10px" ,margin:"20px", borderRadius:"10px" ,boxShadow:"0px 0px 5px"}}>
                 <h2>Title  :{el.title}</h2>
                  <p>Password : {el.password}</p>

                 <div  style={{display:"flex",justifyContent:"space-between"}}> <button onClick={()=>handleDelete(el.id)}>Delete</button>
                  <button onClick={()=>handleEdit(el)}>Edit</button></div>
              </div>
          })}
      
      </>
  )
}

export default Password
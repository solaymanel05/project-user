import React, { useContext, useEffect, useRef, useState } from "react";
import "./styles.css";
import { UserContext } from "./UserApp";
import { useParams } from "react-router-dom";

export default function UserAdd() {
  const context = useContext(UserContext)
  const fullname = useRef();
  const country = useRef();
  const [currentUser,setCurrentUser]= useState({})
  const params = useParams()
  const handelSubmit = (e) => {
    e.preventDefault();
    const para = params
    context.updateUser({
      payload:[{
        fullname: fullname.current.value,
        country: country.current.value,
        id: para
      }]
    });
    fullname.current.value = "";
    country.current.value = "";
    
  };
  useEffect(()=> {
    const {id} = params
    
  const dataUser = context.user.filter(use => use.id === parseInt(id))
  if(dataUser.length > 0){
    setCurrentUser(...dataUser)
  }else{
    console.error("not found")
  }
  //  console.log(dataUser)

  },[])
  return (
    <div className="container">
      
      <h1> My Information</h1>
      <form>
        <label htmlFor="">id:</label>
        <input
          type="text"
          readOnly
          className="form-control-plaintext"
          defaultValue={currentUser?.id}
        />
        <label htmlFor="">fullName:</label>
        <input type="FullName" ref={fullname} defaultValue={currentUser?.fullname} />
        <label htmlFor="">Country:</label>
        <select name="" id="" ref={country} defaultValue={currentUser?.country} key={currentUser?.country} >
          <option value="moroco">morocoo</option>
          <option value="france">france</option>
          <option value="canada">canada</option>
          <option value="England">England</option>
        </select>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handelSubmit}
        >
          Update
        </button>
      </form>
    </div>
  );
}

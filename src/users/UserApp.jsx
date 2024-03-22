import React, { useContext, useState } from "react";
import "./styles.css";
import UserTable from "./UserTable";
import UserAdd from "./UserAdd";
import Userlayout from "./Userlayout";
import { createContext } from "react";

export const UserContext = createContext({
  user: [],
  lastid: 0,
  AddUser: () => null,
  updateUser: () => null,
});
export default function UserApp() {
  const [userName,setUserName] = useState()
  const [user, setUser] = useState([]);
  const [lastid, setLastid] = useState(0);

  const AddUser = ({ payload }) => {
    setUser((prev) => [...prev, payload]);
    setLastid((prev) => prev + 1);
  };

  const updateUser = ({payload}) => {
    
    setUser((prev) => [...prev, payload]);
    setLastid( );
    //*********** */
    // const { id } = data.payload;
    // setUser(prev => prev.map(use =>{
      //  if(use.id === id){
        // return id
      // / }
      //  else{
        // return use
      //  }
    // }))
    window.history.back()
  };
  const DeleteUser = ({ payload }) => {
    setUserName((prev) => [...prev, payload])
    setUser((prev) => [...prev, payload]);
  };

  return (
    <>
      <UserContext.Provider
        value={{
          user: user,
          lastid: lastid,
          AddUser: AddUser,
          updateUser: updateUser,
          DeleteUser: DeleteUser,
          userName: userName,

        }}
      >
        <Userlayout />
      </UserContext.Provider>
    </>
  );
}

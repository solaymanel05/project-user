import React, { useContext, useRef } from "react";
import "./styles.css";
import { UserContext } from "./UserApp";

export default function UserAdd() {
  const context = useContext(UserContext)
  const fullname = useRef();
  const country = useRef();
  const handelSubmit = (e) => {
    e.preventDefault();
    context.AddUser({
      payload: {
        fullname: fullname.current.value,
        country: country.current.value,
        id: context.lastid +1
      },
    });
    fullname.current.value = "";
    country.current.value = "";
  };
  return (
    <div className="container">
      <h1 className="text-primary m-3"> My Information</h1>
      <form>
        <label htmlFor="">id:</label>
        <input
          type="text"
          readOnly
          className="form-control-plaintext "
          value={context.lastid + 1}
        />
        <label htmlFor="">fullName:</label>
        <input type="FullName" ref={fullname} />
        <label htmlFor="">Country:</label>
        <select name="" id="" ref={country}>
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
          Add User
        </button>
      </form>
    </div>
  );
}

import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "./UserApp";
export default function DeleteUser() {
  const context = useContext(UserContext);
  const params = useParams();
  const handelSubmit = (e) => {
    e.preventDefault();
    context.DeleteUser({
      payload: {
        fullname: context.fullname.current.value,
        id: params.id,
      },
    });
  };

  return (
    <div className="container">
      <button type="button" className="btn btn-danger" onClick={handelSubmit}>
        Delete 
      </button>
      <p className="alert alert-danger mt-3">Are you sure for delete this user</p>

    </div>
  );
}

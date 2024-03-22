import React, { useContext } from "react";
import { UserContext } from "./UserApp";
import { Link } from "react-router-dom";

export default function UserTable() {
  const context = useContext(UserContext)

  return (
    <div className="container">
      <table className="table table-bordered">
        <thead >
          <tr >
            <th className="bg-primary text-light" >id</th>
            <th className="bg-primary text-light" >fullname</th>
            <th className="bg-primary text-light" >country</th>
            <th className="bg-primary text-light" >Operation</th>

          </tr>
        </thead>
        <tbody>
          {context.user.length > 0 ? (
            context.user.map((use, key) => 
              <tr key={key}>
                <td>{use.id}</td>
                <td>{use.fullname}</td>
                <td>{use.country}</td>
                <td>
              <Link to={`/user/${use.id}/edit`} className=" text-light bg-primary btn btn-primary m-3 mx-1">Update</Link>
                <Link to={`/user/${use.id}/delete`} className=" text-light bg-danger btn btn-danger m-3 ">Delete</Link>
                </td>
                
              </tr>
            )
          ) : (
            <tr>
              <td colSpan={3} align={"center"}>
                Not found!!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

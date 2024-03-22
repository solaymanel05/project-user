import React from "react";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import UserTable from "./UserTable";
import UserAdd from "./UserAdd";
import UserEdit from "./UserEdit";
import DeleteUser from "./DeleteUser";
export default function Userlayout() {
  return (
    <>
      <BrowserRouter>
        <nav className="nav justify-content-center">
          <li className="nav-item">
            <Link to={"/"} className="nav-link">
              user list
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/user/create"} className="nav-link">
              user Add
            </Link>
          </li>
        </nav>
        <Routes>
          <Route index element={<UserTable />} />
          <Route path="/user/create" element={<UserAdd />} />
          <Route path="/user/:id/edit" element={<UserEdit />} />
          <Route path="/user/:id/delete" element={<DeleteUser/>} />
        </Routes>
      </BrowserRouter>

      <Outlet />
    </>
  );
}

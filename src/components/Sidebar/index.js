import React from "react";
import { Link, NavLink } from "react-router-dom";
// import logo from "../../assets/images/new_logo.png";
// import avatar from "../../assets/images/avatar.png";
import "./style.css";
import { Icons } from "../../assets/icons";

function Sidebar() {
  return (
    <aside className="d-flex flex-column">
      {/* logo */}
      <div className="logo-section">
        <Link to="/">
          <img src="" alt="logo" />
        </Link>
      </div>
      {/* login image and name and type */}
      <div
        className="mt-3 pb-3 d-flex"
        style={{
          borderBottom: "1px solid #ddd",
        }}
      >
        <img src="" className="user-image" alt="user" />
        <div className="info">
          <Link
            to="#"
            className="d-block text-dark"
            style={{ marginTop: "-12px" }}
          >
            Junio K. Krem
          </Link>
          <Link to="#" style={{ color: "#239db1", fontSize: "15px" }}>
            {Icons.FaCircle} <strong style={{
              color: "#00A9ff" 
            }}>Admin</strong>
          </Link>
        </div>
      </div>
      {/* Navbar */}
      <div className="mt-2">
        <ul className="sidebar-nav">
          <li>
            <NavLink to="dashboard">
              {Icons.FaTachometerAlt}
              &nbsp;&nbsp;Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="lostandfound">
              {Icons.FaListAlt}
              &nbsp;&nbsp;Lost and Found Item
            </NavLink>
          </li>
          <li>
            <NavLink to="reports">
              {Icons.FaEdit}
              &nbsp;&nbsp;Reports
            </NavLink>
          </li>
          <li>
            <NavLink to="postcategory">
            {Icons.FaList}
              &nbsp;&nbsp;Post Category
            </NavLink>
          </li>
          <li>
            <NavLink to="memberinformation">
              {Icons.FaInfoCircle}
              &nbsp;&nbsp;Member Information
            </NavLink>
          </li>
          <li>
          <NavLink to="membercredentail">
              {Icons.FaIdCard}
              &nbsp;&nbsp;Member Credential
            </NavLink>
          </li>
          <li>
            <NavLink to="`usermanagement">
              {Icons.FaUsersCog}
              &nbsp;&nbsp;User Management
            </NavLink>
          </li>
          <li>
          <NavLink to="aarzoochorhai">
              {Icons.FaPowerOff}
              &nbsp;&nbsp;Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;

import React from "react";
import { NavLink } from "react-router-dom";
import { Icons } from "../../assets/icons";
import "./style.css";

function Dashboard() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="ms-2 d-flex justify-content-between">
            <div className="mt-3 fs-5" style={{ color: "#666" }}>
              <p
                style={{
                  fontWeight: "normal",

                  fontSize: "23px",
                  color: "black",
                }}
              >
                Dashboard
              </p>
            </div>
            <div className=" me-3 d-flex justify-content-end">
              <ol className="breadcrumb mt-3">
                <li className="breadcrumb-item">
                  <NavLink to="#">Home</NavLink>
                </li>
                <li className="breadcrumb-item" aria-current="page">
                  {Icons.arrow}
                </li>
                <li className="breadcrumb-item" aria-current="page">
                  Dashboard
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-6">
          <div class="small-box" style={{ backgroundColor: "#89CFF3" }}>
            <div class="inner">
              <h3>1,150</h3>

              <p>Total Members</p>
            </div>
            <div className="icon">{Icons.FaUsers}</div>
            <NavLink to="#" className="small-box-footer">
              More info {Icons.FaArrowCircleRight}
            </NavLink>
          </div>
        </div>
        <div className="col-lg-4 col-6">
          <div class="small-box" style={{ backgroundColor: "#00A9FF" }}>
            <div class="inner">
              <h3>150</h3>

              <p>Total Lost Items</p>
            </div>
            <div className="icon">{Icons.FaBriefcase}</div>
            <NavLink to="#" className="small-box-footer">
              More info {Icons.FaArrowCircleRight}
            </NavLink>
          </div>
        </div>
        <div className="col-lg-4 col-6">
          <div class="small-box" style={{ backgroundColor: "#A0E9FF" }}>
            <div class="inner">
              <h3>
                53<sup style={{fontSize: "20px"}}></sup>
              </h3>

              <p>Total Found Items</p>
            </div>
            <div className="icon">{Icons.FaBriefcase}</div>
            <NavLink to="#" className="small-box-footer">
              More info {Icons.FaArrowCircleRight}
            </NavLink>
          </div>
        </div>
      </div>
    </div>

    // <div>hello world!</div>
  );
}

export default Dashboard;

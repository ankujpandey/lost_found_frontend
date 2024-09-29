import React from "react";
import { NavLink } from "react-router-dom";
import { Icons } from "../../assets/icons";

function MemberInformation() {
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
                Member Information
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
                  Member Information
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="col-md-12 mt-2">
          <div className="card border-0">
            <div className="card-header d-flex justify-content-between">
              <h4 className="card-title">Member Information Data table</h4>
              <button
                className="btn btn-success btn-md"
                data-toggle="modal"
                data-target="#add"
              >
                {Icons.FaPlus} <span>Add</span>
              </button>
            </div>
            <div className="card-body border-0 mb-0 pb-0">
              <div className="table-responsive">
                <table className="table table-bordered table-striped text-nowrap">
                  <thead>
                    <tr className="m-0">
                      <th>Complete Name {Icons.PiArrowsDownUp}</th>
                      <th>Address {Icons.PiArrowsDownUp}</th>
                      <th>Contact {Icons.PiArrowsDownUp}</th>
                      <th>Email {Icons.PiArrowsDownUp}</th>
                      <th>Username {Icons.PiArrowsDownUp}</th>
                      <th>Password {Icons.PiArrowsDownUp}</th>
                      <th>Manage By {Icons.PiArrowsDownUp}</th>
                      <th width="7%">Edit {Icons.PiArrowsDownUp}</th>
                      <th width="7%">Delete {Icons.PiArrowsDownUp}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>
                        <i style={{ color: "blue" }}>
                          <u>Data</u>
                        </i>
                      </td>
                      <td>Data</td>
                      <td>**********</td>
                      <td>Data</td>
                      <td>{Icons.FaEdit}</td>
                      <td>{Icons.MdDelete}</td>
                    </tr>
                    <tr>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>
                        <i style={{ color: "blue" }}>
                          <u>Data</u>
                        </i>
                      </td>
                      <td>Data</td>
                      <td>**********</td>
                      <td>Data</td>
                      <td>{Icons.FaEdit}</td>
                      <td>{Icons.MdDelete}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberInformation;

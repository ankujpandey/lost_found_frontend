import React from "react";
import { Icons } from "../../assets/icons";
import { NavLink } from "react-router-dom";

function PostCategory() {
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
                Post Category
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
                  Post Category
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="col-md-12 mt-2">
          <div className="card border-0">
            <div className="card-header d-flex justify-content-between">
              <h4 className="card-title">Post Category Data table</h4>
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
                      <th>Category {Icons.PiArrowsDownUp}</th>
                      <th>Description {Icons.PiArrowsDownUp}</th>
                      <th>Manage by {Icons.PiArrowsDownUp}</th>
                      <th width="7%">Edit {Icons.PiArrowsDownUp}</th>
                      <th width="7%">Delete {Icons.PiArrowsDownUp}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>{Icons.FaEdit}</td>
                      <td>{Icons.MdDelete}</td>
                    </tr>
                    <tr>
                      <td>Data</td>
                      <td>Data</td>
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

export default PostCategory;

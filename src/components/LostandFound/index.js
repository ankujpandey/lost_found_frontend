import React from "react";
import { NavLink } from "react-router-dom";
import { Icons } from "../../assets/icons";
import "./style.css";

function LostandFound() {
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
                Lost and Found
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
                  Lost and Found
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="col-md-12">
        <form>
          <div className="row">
            <div className="col-md-5">
              <input
                className="form-control col-md-3"
                placeholder="Enter Loan ID"
                id="loanID"
                name="loanID"
                maxLength="10"
              />
            </div>
            <div className="col-md-5">
              <input
                className="form-control"
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Phone Number"
                maxLength="10"
              />
            </div>
            <div className="col-md-2">
              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </div>
          </div>
        </form>
        </div>
        <div className="col-md-12 mt-2">
          <div className="card border-0">
            <div className="card-header">
              <h4 className="card-title">Lost and Found Data table</h4>
            </div>
            <div className="card-body border-0 mb-0 pb-0">
              <div className="table-responsive">
                <table className="table table-bordered table-striped text-nowrap">
                  <thead>
                    <tr className="m-0">
                      <th>Post Category {Icons.PiArrowsDownUp}</th>
                      <th>Title {Icons.PiArrowsDownUp}</th>
                      <th>Description {Icons.PiArrowsDownUp}</th>
                      <th>Date {Icons.PiArrowsDownUp}</th>
                      <th>Time {Icons.PiArrowsDownUp}</th>
                      <th>Location {Icons.PiArrowsDownUp}</th>
                      <th>Post Type {Icons.PiArrowsDownUp}</th>
                      <th>Member {Icons.PiArrowsDownUp}</th>
                      <th>Status {Icons.PiArrowsDownUp}</th>
                      <th>Remarks {Icons.PiArrowsDownUp}</th>
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
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>
                       {Icons.FaEdit}
                      </td>
                      <td>
                       {Icons.MdDelete}
                      </td>
                    </tr>
                    <tr>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>Data</td>
                      <td>
                        {/* <a href="postimage.php">
                          <button class="btn btn-primary btn-sm">
                            <i class="fa fa-file-image"></i>
                          </button>
                        </a> */}
                      </td>
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

export default LostandFound;

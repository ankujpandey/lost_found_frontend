import React from "react";
import { NavLink } from "react-router-dom";
import { Icons } from "../../assets/icons";

function Reports() {
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
                Report Lost and Found Item
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
                  Reports
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div
          className="col-md-8"
          style={{
            marginLeft: "10rem",
          }}
        >
          <div className="card border-0">
            <div className="card-header">
              <h4 className="card-title" align="center">
                REPORT FORM
              </h4>
            </div>
            <div className="card-body">
              <form className="form-horizontal">
                <div className="row">
                  <div className="col-4" style={{ marginTop: "-3%" }}>
                    <label>Date:</label>
                    <input
                      type="date"
                      className="form-control mt-1"
                      placeholder=".col-5"
                    />
                  </div>
                  <div className="col-5"></div>
                  <div className="col-3" style={{ marginTop: "-3%" }}>
                    <label>Time:</label>
                    <input
                      type="time"
                      className="form-control mt-1"
                      placeholder=".col-5"
                    />
                  </div>
                  <div className="col-6" style={{ marginTop: "2%" }}>
                    <div className="form-group">
                      <select className="form-control">
                        <option disabled="" selected="">
                          Select Post Category
                        </option>
                        <option>option 2</option>
                        <option>option 3</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-6" style={{ marginTop: "2%" }}>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Title.."
                    />
                  </div>
                  <div className="col-12" style={{ marginTop: "2%" }}>
                    <textarea
                      className="form-control"
                      rows={2}
                      placeholder="Description ..."
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-12" style={{ marginTop: "2%" }}>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Location.."
                    />
                  </div>
                  <div className="col-6" style={{ marginTop: "2%" }}>
                    <div className="form-group">
                      <select className="form-control">
                        <option disabled="" selected="">
                          Post Type
                        </option>
                        <option>Lost</option>
                        <option>Found</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-6" style={{ marginTop: "2%" }}>
                  <input
                      type="file"
                      className="form-control"
                    />
                  </div>
                  <div className="col-12" style={{ marginTop: "2%" }}>
                    <textarea
                      className="form-control"
                      rows={2}
                      placeholder="Remarks ..."
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <button
                    type="submit"
                    className="btn btn-info btn-sm"
                    style={{
                      marginLeft: "25%",
                      marginTop: "1%",
                      width: "50%",
                      height: 40,
                    }}
                  >
                    {Icons.FaCheck} Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;

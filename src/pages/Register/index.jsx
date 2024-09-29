import React, { useState } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { IoPersonCircleOutline } from "react-icons/io5";
import { Formik } from 'formik';
import { BsPersonUp } from "react-icons/bs";
import "./style.css";
import { Link } from "react-router-dom";
import { registerschema } from "../../schema/validation";

const Register= () => {
  const [avatar, setAvatar] = useState(null);
  const [activeTab, setActiveTab] = useState("all");

  const handleAvatarChange = (event) => {
    if (event.target.files.length > 0) {
      setAvatar(URL.createObjectURL(event.target.files[0]));
    }
  };

  const initialValues = {
    email: "",
    password: "",
    fname: "",
    lname: "",
    mobile: "",
    address: ""
  }

  return (
    <section id="signup" className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card border-0 shadow m-3 rounded-lg">
              <div className="card-body p-4">
                <h2 className="text-center mb-4">Create Your Account</h2>
                <Formik
                  initialValues={initialValues}
                  validationSchema={registerschema}
                  onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                      setSubmitting(false);
                    }, 400);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3 text-center">
                        <label htmlFor="avatarUpload" className="avatar-label">
                          <div className="avatar-upload-container">
                            {avatar ? (
                              <img
                                src={avatar}
                                alt="Avatar Preview"
                                className="img-thumbnail"
                                style={{
                                  width: "150px",
                                  height: "150px",
                                  borderRadius: "50%",
                                }}
                              />
                            ) : (
                              <div className="default-avatar">
                                <BsPersonUp
                                  className="img-thumbnail"
                                  style={{
                                    width: "150px",
                                    height: "150px",
                                    borderRadius: "50%",
                                  }}
                                />
                              </div>
                            )}
                          </div>
                        </label>
                        <input
                          type="file"
                          id="avatarUpload"
                          accept="image/*"
                          onChange={handleAvatarChange}
                          style={{ display: "none" }} // Hide the actual file input
                        />
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="fname" className={`form-label ${
                              errors.fname && touched.fname
                                ? "text-danger"
                                : ""
                            }`}>
                            First Name
                          </label>
                          <input
                            type="text"
                            className={`form-control ${
                              errors.fname && touched.fname
                                ? "is-invalid"
                                : touched.fname
                                ? "is-valid"
                                : ""
                            }`}
                            name="fname"
                            id="fname"
                            placeholder="Enter your first name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.fname}
                            // required
                          />
                          {errors.fname && touched.fname ? (
                          <p className="form-error small-text form-validation-warning text-danger">
                            {errors.fname}
                          </p>
                        ) : null}
                        </div>
                        <div className="col-md-6 mb-3">
                          <label htmlFor="lname" className={`form-label ${
                              errors.lname && touched.lname
                                ? "text-danger"
                                : ""
                            }`}>
                            Last Name
                          </label>
                          <input
                            type="text"
                            className={`form-control ${
                              errors.lname && touched.lname
                                ? "is-invalid"
                                : ""
                            }`}
                            name="lname"
                            id="lname"
                            placeholder="Enter your last name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.lname}
                            // required
                          />
                          {errors.lname && touched.lname ? (
                          <p className="form-error small-text form-validation-warning text-danger">
                            {errors.lname}
                          </p>
                        ) : null}
                        </div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className={`form-label ${
                              errors.email && touched.email
                                ? "text-danger"
                                : ""
                            }`}>
                          Email address
                        </label>
                        <input
                          type="email"
                          className={`form-control ${
                              errors.email && touched.email
                                ? "is-invalid"
                                : touched.email
                                ? "is-valid"
                                : ""
                            }`}
                            name="email"
                          id="email"
                          placeholder="Enter your email"
                          onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                          // required
                        />
                        {errors.email && touched.email ? (
                          <p className="form-error small-text form-validation-warning text-danger">
                            {errors.email}
                          </p>
                        ) : null}
                      </div>

                      <div className="mb-3">
                        <label htmlFor="password" className={`form-label ${
                              errors.password && touched.password
                                ? "text-danger"
                                : ""
                            }`}>
                          Password
                        </label>
                        <input
                          type="password"
                          className={`form-control ${
                              errors.password && touched.password
                                ? "is-invalid"
                                : touched.password
                                ? "is-valid"
                                : ""
                            }`}
                            name="password"
                          id="password"
                          placeholder="Enter your password"
                          onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                          // required
                        />
                        {errors.password && touched.password ? (
                          <p className="form-error small-text form-validation-warning text-danger">
                            {errors.password}
                          </p>
                        ) : null}
                      </div>

                      <div className="mb-3">
                        <label htmlFor="mobile" className={`form-label ${
                              errors.mobile && touched.mobile
                                ? "text-danger"
                                : ""
                            }`}>
                          Mobile
                        </label>
                        <input
                          type="number"
                          className={`form-control ${
                              errors.mobile && touched.mobile
                                ? "is-invalid"
                                : touched.mobile
                                ? "is-valid"
                                : ""
                            }`}
                            name="mobile"
                          id="mobile"
                          placeholder="Enter your mobile number"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.mobile}
                          // required
                        />
                        {errors.mobile && touched.mobile ? (
                          <p className="form-error small-text form-validation-warning text-danger">
                            {errors.mobile}
                          </p>
                        ) : null}
                      </div>

                      <div className="mb-3">
                        <label htmlFor="address" className={`form-label ${
                              errors.address && touched.address
                                ? "text-danger"
                                : ""
                            }`}>
                          Address
                        </label>
                        <textarea
                          className={`form-control ${
                              errors.address && touched.address
                                ? "is-invalid"
                                : touched.address
                                ? "is-valid"
                                : ""
                            }`}
                            name="address"
                          id="address"
                          rows="3"
                          placeholder="123 MG Road, Sector 12, New Delhi, 110001"
                          onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.address}
                          // required
                        ></textarea>
                        {errors.address && touched.address ? (
                          <p className="form-error small-text form-validation-warning text-danger">
                            {errors.address}
                          </p>
                        ) : null}
                      </div>

                      <div class="d-flex justify-content-center">
                        <button
                          className="btn center btn-primary rounded-pill"
                          type="submit" 
                          disabled={isSubmitting}
                        >
                          Sign Up
                        </button>
                      </div>

                      <div className="text-center mt-3">
                        <p className="mb-0">
                          Already have an account?{" "}
                          <Link to="/sign-in">Sign In</Link>
                        </p>
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
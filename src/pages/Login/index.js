import "../../App.css";
import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Formik } from 'formik';
import { loginSchema } from "../../schema/validation";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between Sign-Up and Sign-In

  const toggleAuthForm = () => {
    setIsSignUp(!isSignUp); // Toggle the form view
  };

  const initialValues = {
    email: "",
    password: "",
  }

  return (
    <div className="auth-container">
      <Card className="auth-card m-4">
        <Card.Body>
          <div className="mb-4">
            <h2 className="text-center">Sign In</h2>
            <p className="text-center">Login to your account</p>
            <Formik
              initialValues={initialValues}
              validationSchema={loginSchema}
              onSubmit={ async (values, { setSubmitting }) => {
                
                console.log("values----------------", values)
                setSubmitting(false);
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
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="email" className="mb-3">
                    <Form.Label className={`form-label ${
                              errors.email && touched.email
                                ? "text-danger"
                                : ""}`}>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      className={`form-control ${
                        errors.email && touched.email
                          ? "is-invalid"
                          : touched.email
                          ? "is-valid"
                          : ""
                      }`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    {errors.email && touched.email ? (
                          <p className="form-error small-text form-validation-warning text-danger">
                            {errors.email}
                          </p>
                        ) : null}
                  </Form.Group>
                  <Form.Group controlId="password" className="mb-3">
                    <Form.Label className={`form-label ${
                              errors.password && touched.password
                                ? "text-danger"
                                : ""}`}>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      className={`form-control ${
                        errors.password && touched.password
                          ? "is-invalid"
                          : touched.password
                          ? "is-valid"
                          : ""
                      }`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    {errors.password && touched.password ? (
                          <p className="form-error small-text form-validation-warning text-danger">
                            {errors.password}
                          </p>
                        ) : null}
                  </Form.Group>
                  <div className="d-flex justify-content-center">
                    <Button
                      variant="primary"
                      type="submit"
                      className="btn btn-primary rounded-pill"
                    >
                      Sign In
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
            <div className="text-center mt-3">
              <p className="mb-0">
                New user? <Link to="/sign-up">Sign Up</Link>
              </p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
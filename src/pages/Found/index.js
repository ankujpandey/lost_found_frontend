import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Formik } from "formik";
import { reportSchema } from "../../schema/validation";
import { apiUrls, callGetApi, docSubmit } from "../../utils/api-config";
import { toast } from "sonner";
// className="background-lost-page"

function Found() {
  const [itemLists, setItemLists] = useState([]);
  let uid = 62;
  const fetchItemlists = async () => {
    try {
      const url = apiUrls.itemCatagory;
      const getItems = await callGetApi(url);
      // console.log("getItems----------", getItems?.result);
      setItemLists(getItems.result);
    } catch (error) {
      console.log("error-----------", error);
    }
  };
  useEffect(() => {
    fetchItemlists();
  }, []);
  const initialValues = {
    title: "",
    postCategory: "",
    description: "",
    remark: "",
    locationLost: "",
    dateLost: "",
    file: null, // Add a field for the file
    // post_type: 2, // Set default post_type
  };
  return (
    <div>
      <Header/>
      <section id="found" className="py-5 bg-light">
        <div>
          <div className="container">
            <h2 className="text-center mb-4">Report a Found Item</h2>

            {/* Found Item Form */}
            <div className="row justify-content-center">
                <div className="col-md-10">
                  <Formik
                     initialValues={initialValues}
                     validationSchema={reportSchema}
                     // enableReinitialize={true}
                     onSubmit={async (values, { setSubmitting, resetForm }) => {
                     setSubmitting(true);
 
                     let url = apiUrls.report;
                     let formData = new FormData();
                     formData.append("uid", uid);
                     formData.append("post_category", values.postCategory);
                     formData.append("title", values.title);
                     formData.append("report_time", values.dateLost);
                     formData.append("description", values.description);
                     formData.append("remarks", values.remark);
                     formData.append("location", values.locationLost);
                     formData.append("post_type", 2);
                     if (values.file) {
                       formData.append("image_url", values.file);
                     }
 
                     console.log("--- form data -- ",formData.entries());
 
                     const uploadRes = await docSubmit(url, formData);
                     // console.log("uploadRes----", uploadRes);
                     if (!uploadRes.success) {
                       toast.error('Error', {
                         description: uploadRes?.message,
                       })
                     }else{
                       toast.success("Report Successfully", {
                         // description: "Please sign-in to continue.",
                       });
                       // navigate("/sign-in", { replace: true });
                     }
                       // console.log("---values---", values);
                       // Perform your form submission logic here
                       //resetForm(); // Reset the form values
                       // setFieldValue('file',null);
                      //document.getElementById('file').value = null;
 
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
                      setFieldValue, // Add this to handle file input
                    }) => (
                      <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                          <label
                            htmlFor="title"
                            className={`form-label ${
                              errors.title && touched.title ? "text-danger" : ""
                            }`}
                          >
                            Title
                          </label>
                          <input
                            type="text"
                            className={`form-control ${
                              errors.title && touched.title
                                ? "is-invalid"
                                : touched.title
                                ? "is-valid"
                                : ""
                            }`}
                            name="title"
                            id="title"
                            placeholder="Enter the name of the item"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.title}
                            required
                          />
                          {errors.title && touched.title ? (
                            <p className="form-error small-text form-validation-warning text-danger">
                              {errors.title}
                            </p>
                          ) : null}
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="postCategory"
                            className={`form-label ${
                              errors.postCategory && touched.postCategory
                                ? "text-danger"
                                : ""
                            }`}
                          >
                            Post Category
                          </label>
                          <select
                            className={`form-control ${
                              errors.postCategory && touched.postCategory
                                ? "is-invalid"
                                : touched.postCategory
                                ? "is-valid"
                                : ""
                            }`}
                            name="postCategory"
                            id="postCategory"
                            value={values.postCategory}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                          >
                            {itemLists?.map((item) => (
                              <option key={item.id} value={item.post_category}>
                                {item.post_category}
                              </option>
                            ))}
                          </select>
                          {errors.postCategory && touched.postCategory ? (
                            <p className="form-error small-text form-validation-warning text-danger">
                              {errors.postCategory}
                            </p>
                          ) : null}
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="description"
                            className={`form-label ${
                              errors.description && touched.description
                                ? "text-danger"
                                : ""
                            }`}
                          >
                            Description
                          </label>
                          <textarea
                            className={`form-control ${
                              errors.description && touched.description
                                ? "is-invalid"
                                : touched.description
                                ? "is-valid"
                                : ""
                            }`}
                            name="description"
                            id="description"
                            rows="4"
                            placeholder="Describe the item in detail"
                            value={values.description}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                          ></textarea>
                          {errors.description && touched.description ? (
                            <p className="form-error small-text form-validation-warning text-danger">
                              {errors.description}
                            </p>
                          ) : null}
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="remark"
                            className={`form-label ${
                              errors.remark && touched.remark
                                ? "text-danger"
                                : ""
                            }`}
                          >
                            Remark
                          </label>
                          <textarea
                            className={`form-control ${
                              errors.remark && touched.remark
                                ? "is-invalid"
                                : touched.remark
                                ? "is-valid"
                                : ""
                            }`}
                            name="remark"
                            id="remark"
                            rows="4"
                            placeholder="Describe the item in detail"
                            value={values.remark}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                          ></textarea>
                          {errors.remark && touched.remark ? (
                            <p className="form-error small-text form-validation-warning text-danger">
                              {errors.remark}
                            </p>
                          ) : null}
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="file"
                            className={`form-label ${
                              errors.file && touched.file ? "text-danger" : ""
                            }`}
                          >
                            Upload File
                          </label>
                          <input
                            type="file"
                            className={`form-control ${
                              errors.file && touched.file
                                ? "is-invalid"
                                : touched.file
                                ? "is-valid"
                                : ""
                            }`}
                            name="file"
                            id="file"
                            onChange={(event) => {
                              // const file = event.currentTarget.files[0];
                              setFieldValue("file", event.currentTarget.files[0]); // Set file value in Formik state
                            }}
                            onBlur={handleBlur}
                            required
                          />
                          {errors.file && touched.file ? (
                            <p className="form-error small-text form-validation-warning text-danger">
                              {errors.file}
                            </p>
                          ) : null}
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="locationLost"
                            className={`form-label ${
                              errors.locationLost && touched.locationLost
                                ? "text-danger"
                                : ""
                            }`}
                          >
                            Location Lost
                          </label>
                          <input
                            type="text"
                            className={`form-control ${
                              errors.locationLost && touched.locationLost
                                ? "is-invalid"
                                : touched.locationLost
                                ? "is-valid"
                                : ""
                            }`}
                            name="locationLost"
                            id="locationLost"
                            placeholder="Where did you lose it? Example 123 MG Road, Sector 12, New Delhi, 110001"
                            value={values.locationLost}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                          />
                          {errors.locationLost && touched.locationLost ? (
                            <p className="form-error small-text form-validation-warning text-danger">
                              {errors.locationLost}
                            </p>
                          ) : null}
                        </div>

                        <div className="mb-3">
                          <label
                            htmlFor="dateLost"
                            className={`form-label ${
                              errors.dateLost && touched.dateLost
                                ? "text-danger"
                                : ""
                            }`}
                          >
                            Date Lost
                          </label>
                          <input
                            type="datetime-local"
                            className={`form-control ${
                              errors.dateLost && touched.dateLost
                                ? "is-invalid"
                                : touched.dateLost
                                ? "is-valid"
                                : ""
                            }`}
                            name="dateLost"
                            id="dateLost"
                            value={values.dateLost}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                          />
                          {errors.dateLost && touched.dateLost ? (
                            <p className="form-error small-text form-validation-warning text-danger">
                              {errors.dateLost}
                            </p>
                          ) : null}
                        </div>
                        <div class="d-flex mt-4 justify-content-center">
                          <button
                            type="submit"
                            className="btn btn-primary px-4 py-2 rounded-pill"
                            disabled={isSubmitting}
                          >
                            Report Found Item
                          </button>
                        </div>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
            {/* List of Recently Reported Found Items */}
            <div className="mt-5">
              <h3 className="text-center mb-4">
                Recently Reported Found Items
              </h3>
              <div className="row">
                {/* Example Found Item */}
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Found Wallet</h5>
                      <p className="card-text">
                        A black leather wallet with several cards found near the
                        bus stop.
                      </p>
                      <p className="text-muted">
                        Found on: 2024-09-01 at 14:30
                      </p>
                    </div>
                  </div>
                </div>

                {/* Add more found items here */}
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Found Backpack</h5>
                      <p className="card-text">
                        A blue backpack found near the park entrance.
                      </p>
                      <p className="text-muted">
                        Found on: 2024-09-03 at 10:00
                      </p>
                    </div>
                  </div>
                </div>

                {/* Another Found Item */}
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Found Keys</h5>
                      <p className="card-text">
                        Set of keys with a red keychain found on the sidewalk.
                      </p>
                      <p className="text-muted">
                        Found on: 2024-09-05 at 16:45
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default Found;
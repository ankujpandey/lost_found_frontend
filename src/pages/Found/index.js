import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// className="background-lost-page"

function Found() {
  return (
    <div>
      <Header/>
      <section id="found" className="py-5 bg-light">
        <div>
          <div className="container">
            <h2 className="text-center mb-4">Report a Found Item</h2>

            {/* Found Item Form */}
            <div className="row justify-content-center">
              <div className="col-md-8">
                <form>
                  <div className="mb-3">
                    <label htmlFor="foundItemName" className="form-label">
                      Item Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="foundItemName"
                      placeholder="Enter the name of the found item"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="foundDescription" className="form-label">
                      Description
                    </label>
                    <textarea
                      className="form-control"
                      id="foundDescription"
                      rows="4"
                      placeholder="Describe the item in detail"
                      required
                    ></textarea>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="locationFound" className="form-label">
                      Location Found
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="locationFound"
                      placeholder="Where did you find it?"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="dateTimeFound" className="form-label">
                      Date and Time Found
                    </label>
                    <input
                      type="datetime-local"
                      className="form-control"
                      id="dateTimeFound"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="contactInfo" className="form-label">
                      Contact Information
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="contactInfo"
                      placeholder="Provide your contact info"
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-success w-100">
                    Report Found Item
                  </button>
                </form>
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
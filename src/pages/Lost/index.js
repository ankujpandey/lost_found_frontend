import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Lost() {
  return (
    <div className="background-lost-page">
      <Header />
      <section id="lost" className="py-5">
        <div className="container">
          <div className="card border-0 mx-4 py-3 shadow rounded-lg">
            <div className="card-body py-4">
              <h2 className="text-center mb-4">Report a Lost Item</h2>

              {/* Lost Item Form */}
              <div className="row justify-content-center">
                <div className="col-md-10">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="itemName" className="form-label">
                        Item Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="itemName"
                        placeholder="Enter the name of the item"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="description" className="form-label">
                        Description
                      </label>
                      <textarea
                        className="form-control"
                        id="description"
                        rows="4"
                        placeholder="Describe the item in detail"
                        required
                      ></textarea>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="locationLost" className="form-label">
                        Location Lost
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="locationLost"
                        placeholder="Where did you lose it?"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="dateLost" className="form-label">
                        Date Lost
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="dateLost"
                        required
                      />
                    </div>
                    <div class="d-flex mt-4 justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-primary px-4 py-2 rounded-pill"
                      >
                        Report Lost Item
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* List of Recently Reported Lost Items */}
          <div className="mt-5">
            <h3 className="text-center mb-4">Recently Reported Lost Items</h3>
            <div className="row">
              {/* Example Lost Item */}
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Lost Wallet</h5>
                    <p className="card-text">
                      A brown leather wallet with several cards inside. Lost
                      near Central Park.
                    </p>
                    <p className="text-muted">Lost on: 2024-09-01</p>
                  </div>
                </div>
              </div>
              {/* Add more lost items here */}
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Lost Phone</h5>
                    <p className="card-text">
                      Black iPhone 12, lost near the subway entrance on 5th
                      Avenue.
                    </p>
                    <p className="text-muted">Lost on: 2024-09-03</p>
                  </div>
                </div>
              </div>

              {/* Another Lost Item */}
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Lost Glasses</h5>
                    <p className="card-text">
                      Silver-rimmed glasses with a black case. Last seen at the
                      library.
                    </p>
                    <p className="text-muted">Lost on: 2024-09-05</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Lost;
import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
        {/* Hero Section */}
        <Header/>
        <section className="bg-primary hero text-white text-center py-5">
          <div className="container">
            <h2 className="display-4 font-weight-bold">
              Your Lost Item Awaits
            </h2>
            <p className="lead">
              Find your missing items or help reunite someone with theirs.
            </p>
            <div className="mt-4">
              <Link to="/lostItem" className="btn btn-primary button-design rounded-pill m-3 btn-lg">
                I Lost Something
              </Link>
              <Link to="/foundItem" className="btn btn-primary button-design rounded-pill m-3 btn-lg">
                I Found Something
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container py-5">
          <div className="row text-center">
            <div className="col-lg-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Report Lost Items</h5>
                  <p className="card-text">
                    Easily report items you’ve lost. We'll help you find them!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Found Something?</h5>
                  <p className="card-text">
                    Submit found items and help reconnect them with their
                    owners.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Admin Support</h5>
                  <p className="card-text">
                    Contact our admin team for any help or inquiries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer/>
    </>
  );
}

export default Home
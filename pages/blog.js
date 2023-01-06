import React from "react";
import styles from "../styles/Home.module.css";

function Blog() {
  return (
    <div className="container mt-5">
      <main className="container">
        <h1 className="text-center my-5">Popular Blogs</h1>
        <div className="row">
          <div className="col-md-5 m-auto">
            <div className="card">
              {/* <img src="..." className="card-img-top" alt="..."> */}
              <div className="card-body">
                <h5 className="card-title">Learn Javascript</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-5 m-auto">
            <div className="card">
              {/* <img src="..." className="card-img-top" alt="..."> */}
              <div className="card-body">
                <h5 className="card-title">Learn Linux</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Blog;

import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div className="Form">
      <div className="card-body background">
        <form className="search-form">
          <div className="row">
            <div className="col-8">
              <div className="input-group mb-5 mt-4">
                <input
                  type="text"
                  className="form-control"
                  id="search-text"
                  placeholder="Enter a city"
                  autoFocus
                  autoComplete="off"
                />
                <button
                  className="btn btn-outline-secondary"
                  type="submit"
                  id="button-addon2"
                >
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
            <div className="col-4">
              <button
                type="button"
                className="btn btn-outline-success mb-5 mt-4"
                id="current-button"
              >
                Current
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

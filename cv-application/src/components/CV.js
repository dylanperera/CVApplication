import React from "react";
import "../css/inputForm.css";
import CVPreview from '../components/CV-preview';

class CV extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row row-content edit-and-view">
          <div className="col-12 col-md-5 offset-md-1">
            <div className="container cvForm">
              {/*Personal information section */}
              <div className="row row-content">
                <div className="col-12">
                  <h4>Personal Information</h4>
                </div>
                <div className="col-12">
                  <form>
                    <div className="form-group row">
                      <div className="col-12">
                        <input
                          type="text"
                          className="form-control"
                          name="firstname"
                          id="firstName"
                          placeholder="First name"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-12">
                        <input
                          type="text"
                          className="form-control"
                          name="lastname"
                          id="lastname"
                          placeholder="Last name"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-12">
                        <input
                          type="text"
                          className="form-control"
                          name="title"
                          id="title"
                          placeholder="Title"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-12">
                        <label htmlFor="photo">Select image:</label>
                      </div>
                      <div className="col-12">
                        <input
                          type="file"
                          className="form-control"
                          name="photo"
                          id="photo"
                          placeholder="Select a photo"
                          accept="image/*"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-12">
                        <input
                          type="text"
                          className="form-control"
                          name="address"
                          id="address"
                          placeholder="Address"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-12">
                        <input
                          type="text"
                          className="form-control"
                          name="phonenumber"
                          id="phonenumber"
                          placeholder="Phone number"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-12">
                        <input
                          type="text"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-12">
                        <textarea
                          className="form-control"
                          name="description"
                          id="description"
                          placeholder="Description"
                          rows="4"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="row row-content experience">
                <div className="col-12">
                  <h4>Experience</h4>
                </div>
                <div className="col-12">
                  <button type="button" className="btn btn-block btn-primary">
                    Add
                  </button>
                </div>
              </div>

              <div className="row row-content education">
                <div className="col-12">
                  <h4>Education</h4>
                </div>
                <div className="col-12">
                  <button type="button" className="btn btn-block btn-primary">
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>

          <CVPreview/>
        </div>
      </div>
    );
  }
}

export default CV;

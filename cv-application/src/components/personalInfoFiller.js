import React from "react";
import "../css/inputForm.css";

export default class PersonalInfoFiller extends React.Component {
  render() {
    return (
      <div className = "row row-content">
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
                  name="firstName"
                  id="firstName"
                  placeholder="First name"
                  onChange={this.props.inputHandler}
                  value={this.props.personInfoStates.firstName}
                />
              </div>
            </div>

            <div className="form-group row">
              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  id="lastname"
                  placeholder="Last name"
                  onChange={this.props.inputHandler}
                  value={this.props.personInfoStates.lastName}
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
                  onChange={this.props.inputHandler}
                  value={this.props.personInfoStates.title}
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
                  onChange={this.props.inputHandler}
                  value={this.props.personInfoStates.address}
                />
              </div>
            </div>

            <div className="form-group row">
              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  name="phoneNumber"
                  id="phonenumber"
                  placeholder="Phone number"
                  onChange={this.props.inputHandler}
                  value={this.props.personInfoStates.phoneNumber}
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
                  onChange={this.props.inputHandler}
                  value={this.props.personInfoStates.email}
                />
              </div>
            </div>

            <div className="form-group row">
              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  name="linkedin"
                  id="linkedin"
                  placeholder="Linkedin (URL)"
                  onChange={this.props.inputHandler}
                  value={this.props.personInfoStates.linkedin}
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
                  onChange={this.props.inputHandler}
                  value={this.props.personInfoStates.description}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

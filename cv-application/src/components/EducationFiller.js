import React from "react";
import "../css/inputForm.css";

export default class Education extends React.Component {
  render() {
    return (
      <ul>
        {this.props.education.map((currEducation) => {
          return (
            <li key = {currEducation.educationId}>
              <form>
                <div className="form-group row">
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control"
                      name="school"
                      id="school"
                      placeholder="School"
                      onChange = {(e) => {
                        this.props.editEducation(currEducation.educationId, e)
                      }}
                      value = {currEducation.school}
                     
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control"
                      name="city"
                      id="city"
                      placeholder="City"
                      onChange = {(e) => {
                        this.props.editEducation(currEducation.educationId, e)
                      }}
                      value = {currEducation.city}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control"
                      name="degree"
                      id="degree"
                      placeholder="Degree (ex., Bachelors)"
                      onChange = {(e) => {
                        this.props.editEducation(currEducation.educationId, e)
                      }}
                      value = {currEducation.degree}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control"
                      name="major"
                      id="major"
                      placeholder="Major"
                      onChange = {(e) => {
                        this.props.editEducation(currEducation.educationId, e)
                      }}
                      value = {currEducation.major}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control"
                      name="from"
                      id="from"
                      placeholder="From"

                      onChange = {(e) => {
                        this.props.editEducation(currEducation.educationId, e)
                      }}
                      value = {currEducation.from}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control"
                      name="to"
                      id="to"
                      placeholder="To"
                      onChange = {(e) => {
                        this.props.editEducation(currEducation.educationId, e)
                      }}
                      value = {currEducation.to}
                    />
                  </div>
                </div>

               



                <div className="form-group row">
                  <div className="col-12">
                    <button type="button" className="btn btn-warning btn-block" onClick={() => {
                        this.props.deleteEducation(currEducation.educationId);
                    }}>
                      Delete
                    </button>
                  </div>
                </div>
              </form>
            </li>
          );
        })}
      </ul>
    );
  }
}
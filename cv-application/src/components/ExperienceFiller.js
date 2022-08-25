import React from "react";
import "../css/inputForm.css";

export default class ExperienceFiller extends React.Component {
  render() {
    return (
      <ul>
        {this.props.experiences.map((currExperience) => {
          return (
            <li key = {currExperience.experienceId}>
              <form>
                <div className="form-group row">
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control"
                      name="position"
                      id="position"
                      placeholder="Position"
                      onChange = {(e) => {
                        this.props.editExperience(currExperience.experienceId, e)
                      }}
                      value = {currExperience.position}
                     
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control"
                      name="company"
                      id="company"
                      placeholder="Company"
                      onChange = {(e) => {
                        this.props.editExperience(currExperience.experienceId, e)
                      }}
                      value = {currExperience.company}
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
                        this.props.editExperience(currExperience.experienceId, e)
                      }}
                      value = {currExperience.city}
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
                        this.props.editExperience(currExperience.experienceId, e)
                      }}
                      value = {currExperience.from}
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
                        this.props.editExperience(currExperience.experienceId, e)
                      }}
                      value = {currExperience.to}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-12">
                    <textarea
                      type="text"
                      className="form-control"
                      name="jobDescription"
                      id="description"
                      placeholder="1 Line Description"
                      onChange = {(e) => {
                        this.props.editExperience(currExperience.experienceId, e)
                      }}
                      value = {currExperience.jobDescription}
                    />
                  </div>
                </div>



                <div className="form-group row">
                  <div className="col-12">
                    <button type="button" className="btn btn-warning btn-block" onClick={() => {
                        this.props.deleteExperience(currExperience.experienceId);
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

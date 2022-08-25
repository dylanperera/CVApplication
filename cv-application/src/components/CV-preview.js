import React from "react";
import "../css/cvPreview.css";
import "../../node_modules/font-awesome/css/font-awesome.min.css";

class CVPreview extends React.Component {
  render() {
    return (
      <div className="col-12 col-md-5">
        <div className="container-fluid cvPreview">
          <div className="row row-content userInfo">
            <div className="col-12 preventOverWrap">
              <div id="nameInfo">
                <h3 id="firstname">
                  <strong>{this.props.personalInfo.firstName} </strong>
                </h3>
                <h3 id="lastname">
                  <strong>{this.props.personalInfo.lastName}</strong>
                </h3>
              </div>

              <h5 id="title">{this.props.personalInfo.title}</h5>
            </div>
          </div>

          <div className="row row-content">
            <div className="col-9">
              <div className="container-fluid">
                <div className="row row-content cvInnerContent">
                  <div className="col-12">
                    <h6>
                      <strong>Description</strong>
                    </h6>
                  </div>
                  <i className="col-12 preventOverWrap educationInfoFont experience">
                    {this.props.personalInfo.description}
                  </i>
                </div>

                <div className="row row-content cvInnerContent">
                  <div className="col-12">
                    <h6>
                      <strong>Experience</strong>
                    </h6>
                  </div>
                  <div className="col-12 preventOverWrap">
                    <ul>
                      {this.props.workExperience.map((currExperience) => {
                        return (
                          <li key={currExperience.experienceId}>
                            <div>
                              <strong className="educationInfoFont">
                                {currExperience.company}
                              </strong>
                            </div>

                            <div>
                              <strong className="educationInfoFont d-inline">
                                {currExperience.position}
                              </strong>

                              {" | "}

                              <div className="educationInfoFont d-inline">
                                {currExperience.city}
                              </div>

                              {" | "}

                              <div className="educationInfoFont d-inline">
                                {currExperience.from}
                              </div>
                              {" - "}

                              <div className="educationInfoFont d-inline">
                                {currExperience.to}
                              </div>
                            </div>

                            <div className="educationInfoFont">
                              {currExperience.jobDescription}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>

                <div className="row row-content cvInnerContent">
                  <div className="col-12">
                    <h6>
                      <strong>Education</strong>
                    </h6>
                  </div>
                  <div className="col-12 preventOverWrap">
                    <ul>
                      {this.props.education.map((currEducation) => {
                        return (
                          <li key={currEducation.educationId}>
                            <div>
                              <strong className="educationInfoFont">
                                {currEducation.school}
                              </strong>
                            </div>

                            <div>
                              <strong className="educationInfoFont d-inline">
                                {currEducation.city}
                              </strong>

                              {" | "}

                              <div className="educationInfoFont d-inline">
                                {currEducation.degree}
                              </div>

                              {" | "}

                              <div className="educationInfoFont d-inline">
                                {currEducation.from}
                              </div>
                              {" - "}

                              <div className="educationInfoFont d-inline">
                                {currEducation.to}
                              </div>
                            </div>

                            <div className="educationInfoFont text-truncate">
                              {currEducation.major}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="container sideBar">
                <div className="row row-content">
                  <div className="col-12"></div>
                </div>
                <div className="row row-content">
                  <div className="col-12 preventOverWrap">
                    <h6>
                      <strong>Personal Details</strong>
                    </h6>
                  </div>
                  <div className="col-12 preventOverWrap">
                    <ul>
                      <li>
                        <i className="fa fa-sm fa-home"></i>{" "}
                        <strong>Address</strong>
                        <div className="educationInfoFont">
                          {this.props.personalInfo.address}
                        </div>
                      </li>
                      <li>
                        <i className="fa fa-sm fa-phone"></i>{" "}
                        <strong>Phone Number</strong>
                        <div className="educationInfoFont">
                          {this.props.personalInfo.phoneNumber}
                        </div>
                      </li>
                      <li>
                        <i className="fa fa-sm fa-envelope email"></i>{" "}
                        <strong>Email</strong>
                        <div className="educationInfoFont">
                          {this.props.personalInfo.email}
                        </div>
                      </li>
                      <li>
                        <i className="fa fa-sm fa-linkedin"></i>{" "}
                        <strong>Linkedin</strong>
                        <div className="educationInfoFont">
                          {this.props.personalInfo.linkedin}
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CVPreview;

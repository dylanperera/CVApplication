import React from "react";
import "../css/cvPreview.css";
import '../../node_modules/font-awesome/css/font-awesome.min.css';

class CVPreview extends React.Component {
  render() {
    return (
      <div className="col-12 col-md-5">
        <div className="container-fluid cvPreview">
          <div className="row row-content userInfo">
            <div className="col-12">
              <div id="nameInfo">
                <h3 id="firstname">
                  <strong>dsfdf</strong>
                </h3>
                <h3 id="lastname">
                  <strong>dsfdf</strong>
                </h3>
              </div>

              <h5 id="title">dsfd</h5>
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
                  <i className="col-12">hiuhuih</i>
                </div>

                <div className="row row-content cvInnerContent">
                  <div className="col-12">
                    <h6>
                      <strong>Experience</strong>
                    </h6>
                  </div>
                  <i className="col-12">hiuhuih</i>
                </div>

                <div className="row row-content cvInnerContent">
                  <div className="col-12">
                    <h6>
                      <strong>Education</strong>
                    </h6>
                  </div>
                  <i className="col-12">hiuhuih</i>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="container">
                <div className="row row-content">
                  <div className="col-12">
                    <img/>
                  </div>
                </div>
                <div className="row row-content">
                  <div className="col-12">
                    <h6>
                  Personal Details
                    </h6>
                  </div>
                  <div className="col-12">
                    <ul>
                        <li><i className = "fa fa-sm fa-home"></i> <strong>Address</strong></li>
                        <li><i className = "fa fa-sm fa-phone"></i> <strong>Phone Number</strong></li>
                        <li><i className = "fa fa-sm fa-envelope"></i> <strong>Email</strong></li>
                        <li><i className = "fa fa-sm fa-linkedin"></i> <strong>Linkedin</strong></li>
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

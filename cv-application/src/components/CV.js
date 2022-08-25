import React from "react";
import "../css/inputForm.css";
import CVPreview from "../components/CV-preview";
import PersonalInfoFiller from "../components/personalInfoFiller";
import ExperienceFiller from "./ExperienceFiller";
import EducationFiller from "./EducationFiller";
import uniqid from "uniqid";

class CV extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      title: "",
      address: "",
      phoneNumber: "",
      email: "",
      linkedin: "",
      description: "",
      experiences: [],
      education: [],
    };
    this.inputHandler = this.inputHandler.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);
    this.editExperience = this.editExperience.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
    this.editEducation = this.editEducation.bind(this);
    this.clearCV = this.clearCV.bind(this);
    this.generateExample = this.generateExample.bind(this);
  }

  inputHandler(e) {
    const target = e.target;
    const name = target.name;
    this.setState({ [name]: target.value });
  }

  addExperience() {
    const experienceObject = {
      position: "",
      company: "",
      city: "",
      from: "",
      to: "",
      jobDescription: "",
      experienceId: uniqid(),
    };
    this.setState({
      experiences: this.state.experiences.concat(experienceObject),
    });
  }

  deleteExperience(expId) {
    this.setState({
      experiences: this.state.experiences.filter((experience) => {
        if (experience.experienceId !== expId) {
          return true;
        } else {
          return false;
        }
      }),
    });
  }

  editExperience(expId, e) {
    this.setState({
      experiences: this.state.experiences.map((experience) => {
        if (experience.experienceId === expId) {
          const target = e.target;
          const name = target.name;

          experience[name] = target.value;
        }
        return experience;
      }),
    });
  }

  addEducation() {
    const educationObject = {
      school: "",
      city: "",
      degree: "",
      major: "",
      from: "",
      to: "",
      educationId: uniqid(),
    };
    this.setState({
      education: this.state.education.concat(educationObject),
    });
  }

  deleteEducation(eduId) {
    this.setState({
      education: this.state.education.filter((edu) => {
        if (edu.educationId !== eduId) {
          return true;
        } else {
          return false;
        }
      }),
    });
  }

  generateExample() {
    this.setState({
      firstName: "Dylan",
      lastName: "Perera",
      title: "Software Engineer",
      address: "24-2395 Bromsgrove Rd",
      phoneNumber: "416-268-2567",
      email: "d.perera@mail.utoronto.ca",
      linkedin: "https://www.linkedin.com/in/dylan-perera-69aa821a8/",
      description:
        "I am a third year computer engineering student at the university. My interests lie in web development and artifical intelligence.",
      experiences: [
        {
          position: "Front-End Developer",
          company: "CloudClub",
          city: "Toronto",
          from: "May 2022",
          to: "Present",
          jobDescription:
            "Create front-end pages for different parts of the website",
          experienceId: uniqid(),
        },
      ],
      education: [
        {
          school: "University of Toronto",
          city: "Toronto",
          degree: "Bachelors of Applied Science",
          major: "Computer Engineering",
          from: "2020",
          to: "Present",
          educationId: uniqid(),
        },
      ],
    });
  }

  clearCV() {
    this.setState({
      firstName: "",
      lastName: "",
      title: "",
      address: "",
      phoneNumber: "",
      email: "",
      linkedin: "",
      description: "",
      experiences: [],
      education: [],
    });
  }

  editEducation(eduId, e) {
    this.setState({
      education: this.state.education.map((edu) => {
        if (edu.educationId === eduId) {
          const target = e.target;
          const name = target.name;

          edu[name] = target.value;
        }
        return edu;
      }),
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row row-content edit-and-view">
          <div className="col-12 col-md-5 offset-md-1">
            <div className="container cvForm">
              {/*Personal information section */}

              <PersonalInfoFiller
                inputHandler={this.inputHandler}
                personInfoStates={this.state}
              />

              <div className="row row-content">
                <div className="col-12">
                  <h4>Experience</h4>
                </div>
                <div className="col-12">
                  <ExperienceFiller
                    experiences={this.state.experiences}
                    deleteExperience={this.deleteExperience}
                    editExperience={this.editExperience}
                  />
                  <button
                    type="button"
                    className="btn btn-block btn-primary"
                    onClick={this.addExperience}
                  >
                    Add
                  </button>
                </div>
              </div>
              <br />

              <div className="row row-content education">
                <div className="col-12">
                  <h4>Education</h4>
                </div>
                <div className="col-12">
                  <EducationFiller
                    education={this.state.education}
                    deleteEducation={this.deleteEducation}
                    editEducation={this.editEducation}
                  />
                  <button
                    type="button"
                    className="btn btn-block btn-primary"
                    onClick={this.addEducation}
                  >
                    Add
                  </button>
                </div>
              </div>
              <br />

              <div className="row row-content">
                <div className="col-12">
                  <ul>
                    <li>
                      <button
                        className="btn btn-block btn-success"
                        type="button"
                      >
                        Generate PDF
                      </button>
                    </li>
                    <li>
                      <button
                        className="btn btn-block btn-example"
                        type="button"
                        onClick={this.generateExample}
                      >
                        Generate Example
                      </button>
                    </li>
                    <li>
                      <button
                        className="btn btn-block btn-danger"
                        type="button"
                        onClick={this.clearCV}
                      >
                        Reset
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <CVPreview
            personalInfo={this.state}
            workExperience={this.state.experiences}
            education={this.state.education}
          />
        </div>
      </div>
    );
  }
}

export default CV;

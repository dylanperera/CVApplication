import React from "react";
import "../css/Header.css"

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <header className="jumbotron jumbotron-fluid">
          <div className="container">
            <div className="row row-header">
              <div className="col-12">
                <h1>CV BUILDER</h1>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

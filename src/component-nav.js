import React from "react";
import Logo from "./logo.svg";
import firebase from "firebase/app";

class Nav extends React.Component {
  handleLogout() {
    firebase
      .auth()
      .signOut()
      .then(result => {
        console.log("Desconectamos guacho");
        window.location.href = "/";
      })
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }
  render() {
    return (
      <React.Fragment>
        <div className="nav valign-wrapper">
          <div className="container">
            <div className="row  margin0">
              <div className="col s2 l1  right-align flex">
                <img src={Logo} alt="" className="logo" />
              </div>
              <div className="col s3 l1 flex">
                <p>Truchigram</p>
              </div>
              <div className="col s2 l1 offset-s5 offset-l7 right-align flex">
                <ul id="dropdown2" className="dropdown-content">
                  <li>
                    <a onClick={this.handleLogout}>logout</a>
                  </li>
                </ul>
                <a
                  className="dropdown-trigger"
                  href="#!"
                  data-target="dropdown2"
                >
                  <img
                    src={this.props.avatar}
                    alt={this.props.nombre}
                    className="circle cardPic inline"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Nav;

import React from "react";
import M from "materialize-css";
import FileUpload from "./component-fileUpload";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/firebase-storage";

class Modal extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <React.Fragment>
        <a
          href="#modal1"
          className="btn-floating btn-large waves-effect waves-light modal-trigger red FAB"
          id="fab"
        >
          <i className="material-icons">add</i>
        </a>

        <div id="modal1" className="modal">
          <div className="modal-content">
            <h4>Posteá en Truchigram</h4>
            <div className="chip">
              <img src="https://lh4.googleusercontent.com/-cK0jvQHC8ro/AAAAAAAAAAI/AAAAAAABbJk/c8c3cA-ztl0/photo.jpg" />
              Jonatan Ariste
            </div>

            <div className="row">
              <form className="col l12">
                <div className="row">
                  <div className="input-field col s9 l4">
                    <i className="material-icons prefix">mode_edit</i>
                    <textarea
                      id="icon_prefix2"
                      className="materialize-textarea"
                    />
                    <label htmlFor="icon_prefix2">Mensaje</label>
                    <FileUpload />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="modal-footer" />
        </div>
      </React.Fragment>
    );
  }
}

export default Modal;

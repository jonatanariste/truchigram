import React from "react";
import Nav from "./component-nav";
import ReactDOM from "react-dom";
import Modal from "./component-modal";
import FeedContent from "./component-feed";

class Feed extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Nav
          nombre="Jonatan Ariste"
          avatar="https://lh4.googleusercontent.com/-cK0jvQHC8ro/AAAAAAAAAAI/AAAAAAABbJk/c8c3cA-ztl0/photo.jpg"
        />
        <div className="container">
          <div className="row">
            <div className="col l6 offset-l3">
              <FeedContent />

              {ReactDOM.createPortal(
                <Modal />,
                document.getElementById("teleport")
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Feed;

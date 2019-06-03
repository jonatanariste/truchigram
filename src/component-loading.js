import React from "react";
import load from "./load.gif";
function Loading() {
  return (
    <React.Fragment>
      <div className="upp">
        <div className="col-md-12 centrar">
          <img src={load} alt="" className="lo" />
        </div>
      </div>
    </React.Fragment>
  );
}
export default Loading;

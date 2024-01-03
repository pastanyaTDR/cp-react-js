import React from "react";

function HeadLine() {
  return (
    <div>
      {" "}
      <div className="py-5 bg-transparent text-center w-100">
        <h1 editable="inline" className="display-1">
          Jumbotron
        </h1>
        <div editable="rich">
          <p className="lead">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeadLine;

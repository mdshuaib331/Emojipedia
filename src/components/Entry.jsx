import React from "react";
import emojipedia from "../emojipedia";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.img}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.entry}</dd>
    </div>
  );
}

export default Entry;

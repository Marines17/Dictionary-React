import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="phonetics">
      <a
        href={props.phonetics.audio}
        className="phoneticlink"
        target="_blank"
        rel="noreferrer"
      >
        {props.phonetics.text}
      </a>
    </div>
  );
}

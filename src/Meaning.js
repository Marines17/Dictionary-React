import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3 className="text-capitalize partOfSpeech">
        {props.meaning.partOfSpeech}
      </h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p className="text-capitalize">{definition.definition}</p>
            <p>
              <em className="text-capitalize">{definition.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}

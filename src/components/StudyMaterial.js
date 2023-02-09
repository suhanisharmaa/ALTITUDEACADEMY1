import React from "react";
import "./StudyMaterial.css";
import Flipcard from "./Flipcard";

function StudyMaterial() {
  return (
    <div className="study_material">
      <div className="items">
      <h3>Get access to all our Study Material</h3>
      <p>
        Make a Payment of 99/- per sheet
        <br />
        Receive selected study material on your mail{" "}
      </p>
      </div>
        <div className="container">
          <div className="row justify-content-md-center">
            <Flipcard id="1111" type="Worksheet" subject="Maths" chapter="Linear Equations" grade="VIII"/>
            <Flipcard id="2222" type="Worksheet" subject="Science" chapter="Magnets" grade="VIII"/>
            <Flipcard id="3333" type="Worksheet" subject="Social" chapter="Subjective" grade="VIII"/>
          </div>
          <div className="row justify-content-md-center">
            <Flipcard id="4444" type="Worksheet" subject="History" chapter="1857 Revolt" grade="VIII"/>
            <Flipcard id="5555" type="Worksheet" subject="Geogra" chapter="Earth" grade="VIII"/>
            <Flipcard id="6666" type="Worksheet" subject="Civics" chapter="Politics" grade="VIII"/>
          </div>
          <div className="row justify-content-md-center">
            <Flipcard id="7777" type="Worksheet" subject="Hindi" chapter="ham hai yahan" grade="VIII"/>
            <Flipcard id="8888" type="Worksheet" subject="English" chapter="A day Out" grade="VIII"/>
            <Flipcard id="9999" type="Worksheet" subject="French" chapter="abcdghsy" grade="VIII"/>
          </div>
      </div>
    </div>
  );
}

export default StudyMaterial;

import React from "react";
import { Row } from "react-bootstrap";

const Intro: React.FC = () => {
  const imageBoxStyle = {
    background:
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./images/caminho.jpg) center center",
    backgroundSize: "cover",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const h1Style = {
    fontFamily: '"Lucida Grande", "Lucida Sans", Arial, sans-serif',
    fontWeight: "bold",
    color: "#d7d3ce",
  };

  return (
    <Row>
      <div className="invisible" id="welcome"></div>
      <Row style={imageBoxStyle}>
        <h1 className="text-platinum font-weight-bold" style={h1Style}>
          Welcome to Matthew Winemiller's portfolio!
        </h1>
      </Row>
    </Row>
  );
};

export default Intro;

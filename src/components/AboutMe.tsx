import { Card, CardImg, Container, Row } from "react-bootstrap";

import { DARK_MODE_CLASSES } from "../types";
import ListCard from "./ListCard";
import React from "react";

const AboutMe: React.FC = () => {
  return (
    <Container className={DARK_MODE_CLASSES} fluid>
      <Row>
        <h1 id="aboutMe">About Me</h1>
      </Row>
      <Row className="card-group text-center mx-1">
        <Card className={DARK_MODE_CLASSES}>
          <blockquote className="blockquote mb-0 card-body">
            <p>
              I am a Full Stack Developer, mostly experienced in JavaScript,
              TypeScript, SQL, React, Node, and ColdFusion. Most of my SQL
              experience is with SQL Server and MySQL. I love being a support
              dev, fixing things, and helping others learn!
            </p>
          </blockquote>
        </Card>

        <Card
          style={{ justifyContent: "center", alignItems: "center" }}
          className={DARK_MODE_CLASSES}
        >
          <CardImg
            src="./images/me.png"
            alt="A photo of me"
            style={{ width: "10rem" }}
          />
        </Card>
        <ListCard
          title="My Hobbies"
          listItems={["Reading", "Gaming", "Watching sports/esports"]}
        />
      </Row>
      <Row className="card-group text-center mx-1">
        <ListCard
          title="Education"
          listItems={[
            "2019 - The University of Arizona Coding Boot Camp",
            "2016 - Pima Community College (Elementary Education Certificate)",
            "2010 - The University of Arizona (BA in Sociology with a minor in Portuguese)",
          ]}
        />
      </Row>
      <Row className="card-group text-center mx-1">
        <Card className={DARK_MODE_CLASSES}>
          <Card.Header>My Favorite Quotes</Card.Header>
          <Card.Body id="gr_quote_body" />
          <Card.Body>
            <a
              href="https://www.goodreads.com/user/show/21696553-matthew-winemiller"
              target="_blank"
              rel="noopener noreferrer"
            >
              <small>Goodreads Quotes</small>
            </a>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default AboutMe;

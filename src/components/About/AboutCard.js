import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
// this will edit the about front text
function AboutCard() {
  return (
    <Card className="quote-card-view" >
      <Card.Body>
      <h1 style={{ fontSize: "2.1em", paddingBottom: "5px", textAlign: 'left'}}>
                  Know Who <strong className="purple">I'm</strong>
                </h1>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            Hi Everyone, I am <span className="purple">Anurag Srivastava </span>
            from <span className="purple"> New Delhi, India.</span>
             I am a Pre Final Year student, pursuing my Bachelor's
            in Computer Science at <span className="purple">Abdul Kalam Technical University.</span>
            
            Additionally, I am enthusiastic about <span className="purple"> Web-development(Backend Development), System Design, Algorithms & Problem-Solving,  Artificialintelligence.</span>
            <br/>
            Some of my hobbies are 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Problem Solving
            </li>
            <li className="about-activity">
              <ImPointRight /> Competitive Programming
            </li>
            <li className="about-activity">
              <ImPointRight /> Weight Lifting
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

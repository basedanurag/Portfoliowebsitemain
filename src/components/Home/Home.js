import React, {useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type";
import Techstack from "../About/Techstack.js";
import Tools from "./Tools.js";
import Wrapper from "../Wrapper.js";
import Timeline from "./Timeline.js";
import { motion } from "framer-motion";
import E1 from "../GetInTouch/Earth/E1.js";
import Heading from "../Extra/Heading/Heading.js";
// import Saturn from "../../Assets/Images/Home/Saturn.png";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./Home.css";

function Home() {
  const variants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { duration: 4, ease: "easeInOut" } },
  };
  const [width, setWidth] =  useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  return (
    <Wrapper>
      <section>
        <Container fluid className="home-section" id="home" style={{paddingLeft: '0px !important',}}>
          <Container className="home-content" style={{}} >
            <Row>
              <Col xs={11} lg={5} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading-name">
                  I'm
                  <strong className="main-name"> Anurag Srivastava</strong>
                </h1>

                <div style={{ padding: 50, textAlign: "left" }}>
                  <Type />
                </div>
              </Col>

              <Col xs={11}lg={4} style={{ paddingBottom: 20, display: 'flex', minHeight: '100%'}}>
                <motion.div className='xs-d-none d-block' variants={variants} initial="hidden" animate="visible" style={{position: 'relative', width: '100%', height: '100%', }}>
                  {
                    width>=500 &&
                    <E1 />
                  }
                </motion.div>
              </Col>
            </Row>
          </Container>
            
          <Container style={{marginTop: '5em'}}>
            <Row>
              <Heading heading={'Extra Curricular Activities'} />
            </Row>
            <Timeline />
          </Container>
        </Container>
        
        <Container style={{margin: '5em 0em'}}>
          <Heading heading={'Skill - Set'} />
          <Techstack />
        </Container>  

        <Container style={{margin: '5em 0em'}}>
          <Heading heading={'Tools I Use'} />
          <Tools />
        </Container>

        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                {/* Feel free to <span className="purple">connect </span>with me */}
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/basedanurag"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/basedanurag"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/basedanurag"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </Wrapper>
  );
}

export default Home;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Wrapper from "../Wrapper.js";
// import Particle from "../Particle.tsx";
// import Techstack from "./Techstack.js";
import Aboutcard from "./AboutCard";
// import laptopImg from "../../Assets/sukrut_square.jpg";
import Tilt from "react-parallax-tilt";
import { publicationList } from "../../data/publicationList.js";
import {motion} from 'framer-motion';
import Edu from "./Edu.js";
import aktu from "../../Assets/Images/Unis/aktu.png";
import LeetcodeStreak1 from "../../Assets/Images/Leetcode/leetcode1.png";
import LeetcodeStreak2 from "../../Assets/Images/Leetcode/leetcode2.png";
// import Badge from "./Badge.js";
// import Knight from "../../Assets/Images/Leetcode/lc-knight2.png";
// import Tdays from "../../Assets/Images/Leetcode/3002.png";
import Anurag from "../../Assets/Images/Anurag.jpg";
import Heading from "../Extra/Heading/Heading.js";
import "./About.css";
import Info from "./Info.js";
// import { Info } from "@mui/icons-material";

function About() {
  const pubList = (publicationList);
  // useEffect(() => {
  //   const fetchLcDetails = async () => {
  //     try{
  //       let myDetails = await fetch('https://leetcode-stats-api.herokuapp.com/adis176');
  //       console.log("my details: ", myDetails);
  //     }
  //     catch(err){
  //       console.log("Error in fetching LC details: ", err);
  //     }
  //   }
  //   fetchLcDetails();
  // }, []);
  return (
    <Wrapper>
      <Container fluid className="about-section" style={{  display: 'flex', flexDirection: 'column'}}>
        <Row>
          <Container className="about-cont">
            <Row style={{ padding: "10px" }}>
              <Col
                md={7}
                style={{
                  paddingTop: "30px",
                  paddingBottom: "50px",
                }}
              >  
              <Aboutcard />
              </Col>
              <Col
                md={5}
                style={{ 
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center", 
                  overflow: "hidden", 
                  paddingTop: "30px", 
                  paddingBottom: "30px" 
                }}
                className="about-img circular-image"
              >
                <Tilt>
                  <img src={Anurag} alt="about" className="img-fluid rounded-circle" />
                </Tilt>
              </Col>
            </Row>
          </Container>
        </Row>
        <br />
        <br />
        <br />
        <br />
        <Row>

     
          <Heading heading={'Education'} />
          <Row className='about-pub-container' >
            <Col xs={9} sm={8} md={7}  lg={6} xl={5}  xxl={4} style={{padding: '0px', margin: '0px', marginRight: '2px'}} className="about-pub-pad">
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0, transition: { delay: 0.5, ease: "easeInOut" } },
                }}>
                 
                  <Edu name={'Abdul Kalam Technical University'} imgsrc={aktu} degree={'Bachelors:'} specialization={'Computer Science and Engineering'} imgbg={aktu} cgpa={'7.45 / 10.0'} location={'Knowledge park, Greater Noida , India'} sub={'AI, ML, Design & Analysis of Algorithms, Advanced Web-dev, Cloud Computing'}/>
                </motion.div>
            </Col>
          </Row>
        </Row>
        <br />
        <br />
        <br />
        <br />
        <Row>
          <Heading heading={'Leetcode'} />
          <Row className='about-pub-container' style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
              <Col xs={12} lg={6} xl={5} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                  <motion.div initial="hidden"
                    whileInView="visible"
                    variants={{
                      hidden: { opacity: 0, y: -100 },
                      visible: { opacity: 1, y: 0, transition: { delay: 0.5, ease: "easeInOut" } },
                    }}>
                    <img src={LeetcodeStreak1} alt="Streak" className="about-lc-img" />
                  </motion.div>
                  <motion.div initial="hidden"
                    whileInView="visible"
                    variants={{
                      hidden: { opacity: 0, y: 100 },
                      visible: { opacity: 1, y: 0, transition: { delay: 0.5, ease: "easeInOut" } },
                    }}>
                    <img src={LeetcodeStreak2} alt="Streak" className="about-lc-img" />
                  </motion.div>  
              </Col>
              <Col xs={9} sm={9} md={7} lg={6} xl={4} style={{display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Info />
              </Col>
          </Row>
        </Row>
      </Container>
    </Wrapper>
  );
}

export default About;

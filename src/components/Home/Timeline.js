import "./Timeline.css"
import React from "react";
// import ReactDOM from "react-dom";
// import { motion } from "framer-motion";
import VanillaTiltComponent from "./VanillaTilt/vanillaTiltCompo";
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
// import Saturn from "../../Assets/Images/Home/Saturn.png";
import Mars from "../../Assets/Images/Home/mars.gif";

// function FadeInWhenVisible({ children, dur}) {
//     return (
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         transition={{ duration: dur }}
//         variants={{
//           visible: { opacity: 1, scale: 1 },
//           hidden: { opacity: 0, scale: 0 }
//         }}
//       >
//         {children}
//       </motion.div>
//     );
// }
export default function Timeline(){
    const tiltOptions = {
        max: 25,
        speed: 400,
        glare: true,
        'max-glare': 0.5,
    };
        return(
        <div className="container bootdey">
            <div className="timeline-card-body">
                <div className="timeline" style={{overflow: 'visible'}}>
                    <div className="timeline-row">
                        <div className="timeline-time">
                             1 June 2024
                        </div>
                        <div className="timeline-content">
                            <div className="timeline-title company">
                                <BusinessIcon className="timeline-icon timeline-reg"/>
                                Treasure Hunt Competition
                            </div>
                            <div className="timeline-title ">
                                <WorkspacePremiumIcon className="timeline-reg"/>
                                Team Leader
                            </div>
                            <div className="timeline-title ">
                                <LocationOnIcon className="timeline-reg"/>
                                Knowledge Park 2,Greater Noida, India
                            </div>
                        
                            <p>On June 1st, 2024, I proudly emerged victorious in the Treasure Hunt competition at DRON PRATIBIMB 2024, an intra-college technical event. 
                                This exciting challenge tested our technical skills in problem-solving, innovation, and teamwork.
Our team's hard work, strategic thinking, and collaboration led us to victory, making it a memorable achievement.
 This experience not only highlighted my ability to work effectively in a team under pressure but also reinforced my passion for tackling complex problems with creative solutions.
 It remains a proud milestone in my journey of growth and learning.
                            </p>
                            <div className="">
                                
                            </div>
                        </div>
                    </div>
    
                    <div className="timeline-row" style={{overflow: 'visible'}}>
                        <img src={Mars} alt='Planet' className="time-img-even"/>
                        
                        <div className="timeline-time">
                        2025
                        </div>
                        <VanillaTiltComponent options={tiltOptions}>
                            <div className="timeline-content">
                                <div className="timeline-title company">
                                    <BusinessIcon className="timeline-icon timeline-reg"/>
                                    Coming soon
                                </div>
                                <div className="timeline-title ">
                                    <WorkspacePremiumIcon className="timeline-reg"/>
                                    
                                </div>
                                <div className="timeline-title ">
                                    <LocationOnIcon className="timeline-reg"/>
                                
                                </div>
                            
                                <p> 

                                </p>
                                <div className="">
                                    <span className="badge badge-light"></span>
                                    <span className="badge badge-light"></span>
                                    <span className="badge badge-light"></span>
                                    <span className="badge badge-light"></span>
                                </div>
                            </div>    
                        </VanillaTiltComponent>                   
                    </div>        
                </div>
            </div>
        </div>
        );
}
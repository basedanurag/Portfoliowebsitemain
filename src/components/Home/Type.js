import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
    options={{
      strings: ['Java Developer', 'AI - ML Enthusiast', 'Problem Solver', 'System Design','Web 3','Spring Framework'],
      autoStart: true,
      loop: true,
    }}
            />
  );
}

export default Type;

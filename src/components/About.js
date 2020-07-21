import React from "react";
import styled from "styled-components";

const AboutDesc = styled.div`
  p {
    font-size: 24px;
  }
  span {
    font-weight: 900;
  }
`;

const About = (props) => {
  return (
    <AboutDesc>
      <p>
        Fruit emporium is founded on a very simple principle:
        <span> Fruit is good.</span>
        <br></br>
        <br></br>We carry the finest selection of produce from around the world,
        from tart citrus to sweet cherries. Our sellers are world-class, and
        your fruit is guaranteed to be worthy of auction in Asian markets.
      </p>
    </AboutDesc>
  );
};

export default About;

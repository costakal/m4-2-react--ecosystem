import React from "react";
import styled from "styled-components";

import ListingGrid from "./ListingGrid";

const HomeDesc = styled.div`
  > p {
    font-size: 24px;
  }
  span {
    font-weight: 900;
  }
`;

const Home = (props) => {
  return (
    <HomeDesc>
      <p>
        Fruit emporium sells the finest fruits from this world and beyond.
        <br></br>
        <br></br>
        <span>Browse items:</span>
      </p>
      <ListingGrid itemList={props.items} />
    </HomeDesc>
  );
};

export default Home;

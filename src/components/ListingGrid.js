import React from "react";
import styled from "styled-components";

const AllItems = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  justify-items: center;
`;

const ItemBlock = styled.div`
  margin: 10px;
  padding: 40px 75px;
  border-radius: 25px;
  box-shadow: -7px 0px 60px -24px;

  img {
    height: 180px;
    border-radius: 25px;
  }
  .item-name {
    font-weight: 900;
    font-size: 20px;
    text-align: center;
    left: 50%;
  }
  .latin-name {
    font-style: italic;
    font-size: 16px;
    text-align: center;
  }
`;

const ListingGrid = ({ itemList }) => {
  const items = Object.values(itemList);
  return (
    <AllItems>
      {items.map((item) => {
        return (
          <ItemBlock key={item.id}>
            <img src={item.imageSrc} alt={`${item.name}`} />
            <p className="item-name">{item.name}</p>
            <p className="latin-name">{item.latinName}</p>
          </ItemBlock>
        );
      })}
      ;
    </AllItems>
  );
};

export default ListingGrid;

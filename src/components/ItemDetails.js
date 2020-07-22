import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Item = styled.div`
  display: flex;
  img {
    height: 500px;
    border-radius: 25px;
  }
  .content {
    margin-left: 50px;
  }
  .item-name {
    margin: 0px;
    font-weight: 900;
    font-size: 38px;
  }
  .latin-name {
    margin-top: 10px;
    font-style: italic;
    color: grey;
    font-size: 20px;
  }
  .description {
    margin-top: 60px;
    font-size: 20px;
  }
  .product {
    font-style: italic;
    font-size: 20px;
  }
  span {
    font-style: italic;
    font-weight: 900;
  }
  .seller-content {
    display: flex;
    font-size: 20px;
  }
  button {
    background: teal;
    padding: 30px 80px;
    border-radius: 20px;
    color: white;
    border: none;
    font-size: 20px;
    margin: 25px 0px;
  }
  .seller-photo {
    height: 50px;
    margin-right: 20px;
  }
`;

const ItemDetails = ({ items, sellers }) => {
  const { itemId } = useParams();
  const itemsArray = Object.values(items);
  const sellersArray = Object.values(sellers);
  const itemDetails = itemsArray.find((item) => item.id === itemId);
  const itemSeller = sellersArray.filter(
    (seller) => seller.id === itemDetails.sellerId
  );

  return (
    <Item>
      <img src={itemDetails.imageSrc} alt={`item-${itemDetails.id}`} />
      <div className="content">
        <p className="item-name">{itemDetails.name}</p>
        <p className="latin-name">{itemDetails.latinName}</p>
        <p className="description">{itemDetails.description}</p>
        <p className="product">
          Product of
          <span> {itemDetails.countryOfOrigin}</span>
        </p>
        <button>${itemDetails.price} - Buy Now</button>
        <div className="seller-content">
          <img
            className="seller-photo"
            src={itemSeller[0].avatarSrc}
            alt={`seller-${itemSeller.id}`}
          />
          <p className="store">
            Sold By<span> {itemSeller[0].storeName}</span>
          </p>
        </div>
      </div>
    </Item>
  );
};

export default ItemDetails;

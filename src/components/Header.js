import React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 80px;
`;

const PageTitle = styled.h1`
  font-weight: bold;
`;

const NavBar = styled.div`
  a {
    margin: 15px;
    text-decoration: none;
    color: black;
  }
`;

const Header = (props) => {
  console.log(props);
  return (
    <PageHeader>
      <PageTitle>Fruit Emporium</PageTitle>
      <NavBar>
        <Link to="/">Homepage</Link>
        <Link to="/about">About Page</Link>
      </NavBar>
    </PageHeader>
  );
};

export default Header;

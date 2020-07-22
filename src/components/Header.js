import React from "react";

import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 80px;
`;

const PageTitle = styled.h1`
  font-weight: 900;
`;

const NavBar = styled.div`
  a {
    margin: 15px;
    text-decoration: none;
  }
`;

const linkCss = {
  fontWeight: "bold",
  color: "Teal",
  textDecoration: "underline",
};

const Header = (props) => {
  return (
    <PageHeader>
      <PageTitle>Fruit Emporium</PageTitle>
      <NavBar>
        <NavLink exact to="/" activeClassName="selected" activeStyle={linkCss}>
          Homepage
        </NavLink>
        <NavLink
          exact
          to="/about"
          activeClassName="selected"
          activeStyle={linkCss}
        >
          About Page
        </NavLink>
      </NavBar>
    </PageHeader>
  );
};

export default Header;

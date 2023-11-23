import React from "react";
import { StyledDiv, Wrapper, Logo } from "./styled";
import { HashRouter, NavLink } from "react-router-dom";
import { Search } from "../Search";


const Nav = () => (
  <HashRouter basename="/">
    <StyledDiv>
      <Wrapper>
        <NavLink exact to="/">
          <Logo />
        </NavLink>
      </Wrapper>
      <Search />
    </StyledDiv>
  </HashRouter>

)
export default Nav;
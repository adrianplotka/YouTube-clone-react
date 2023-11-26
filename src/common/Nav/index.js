import React from "react";
import { StyledDiv, Wrapper, Logo } from "./styled";
import { NavLink } from "react-router-dom";
import { Search } from "../Search";


const Nav = () => (
  <StyledDiv>
    <Wrapper>
      <NavLink exact to="/">
        <Logo />
      </NavLink>
    </Wrapper>
    <Search />
  </StyledDiv>
)
export default Nav;
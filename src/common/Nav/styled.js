import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as WebsiteLogo } from "../../images/logo.svg";

export const StyledDiv = styled.nav`
  background-color: #000000;
  align-items: center;
  justify-content: center;
  display: flex;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  max-width: 1328px;
  
  padding: 23px 32px;
  @media (max-width: 768px) {
    padding: 24px 16px 16px 16px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
  text-decoration: none;
  padding: 13px 24px;

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 12px;
  }
`;

export const Logo = styled(WebsiteLogo)`
    height: 60px;
    transition: transform 0.3s ease-in-out;
    align-items: center;

    @media (max-width: 768px) {
    height: 50px;
  }

    &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.2);
  }
`
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../images/search.svg";

export const Input = styled.input`
  font-weight: 400;
  font-size: 16px;
  color: #7e839a;
  border: none;

  &:focus {
    outline: none;
  }
  @media (max-width: 768px) {
    font-size: 11px;
  }
`;

export const Form = styled.form`
  border: 1px solid #e4e6f0;
  border-radius: 33px;
  background-color: white;
  padding: 12px;
  margin: 20px;
  display: flex;
  align-items: center;


  @media (max-width: 768px) {
    grid-row: 2;
    grid-column: 1 / span 2;
    margin: 10px;
    padding: 5px;
  }
`;

export const Icon = styled(SearchIcon)`
  width: 18px;
  margin-left: 26px;
  margin-right: 20px;
  @media (max-width: 768px) {
    width: 12px;
  }
`;
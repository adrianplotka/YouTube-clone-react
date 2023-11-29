import styled from "styled-components";

export const Box = styled.div`
    border-right: 1px solid #3d3d3d;
    height: auto;
    padding: 5px;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: stretch;
    align-content: stretch;
`

export const StyledButton = styled.button`
    font-weight: bold;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    justify-content: start;
    cursor:pointer;
    background: transparent;
    outline: none;
    border: none;
    color: white;

    padding: 7px 15px;
    margin: 10px 0px;
    border-radius: 20px;
    transition: all 0.3s ease;

    &:active {
        background-color: red;
    }

    &:hover {
        background-color: red;
    }


    @media (max-width: 768px) {
        margin: 10px;
        }
`

export const StyledIcon = styled.span`
    margin-right: 15px;
    color: red;

`

export const StyledName = styled.span`
`

export const Footer = styled.p`

`
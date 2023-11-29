import styled from "styled-components";

export const BigBox = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: stretch;
    align-content: stretch;
    background: black;

@media (max-width: 768px) {
    flex-direction: row;
}
`

export const MainText = styled.h4`
 color: white;
 font-weight: bold;
`
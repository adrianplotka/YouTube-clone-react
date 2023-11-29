import React from 'react';
import { Box, Footer, StyledButton, StyledIcon, StyledName } from './styled';
import { categories } from '../../../images/constants';

const CattegoryBox = () => {
  return (
    <Box>
      {categories.map((category) =>(
        <StyledButton key={category.name}>
          <StyledIcon>{category.icon}</StyledIcon>
          <StyledName>{category.name}</StyledName>
        </StyledButton>
      ))}
      <Footer>
        Copyright 2023 ADIK
      </Footer>
    </Box>
  )
}

export default CattegoryBox
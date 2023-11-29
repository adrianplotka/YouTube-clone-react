import React from 'react'
import { BigBox, MainText } from './styled'
import CattegoryBox from './CattegoryBox'

const Home = () => {
  return (
    <BigBox>
      <CattegoryBox/>
      <MainText>New videos</MainText>
    </BigBox>
  )
}

export default Home
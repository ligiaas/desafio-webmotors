import React from 'react';
import Header from './components/header/Header'
import Logo from './components/logo/Logo'
import Body from './components/body'

import styled from 'styled-components'

const StyledContainer = styled.div`
  font-family: Roboto, Arial, Helvetica, sans-serif;
  padding: 0 30px;
`

function Home() {
  return (
    <StyledContainer>
      <Header>
        <Logo />
      </Header>
      <Body />
    </StyledContainer>
  );
}

export default Home;

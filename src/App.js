import React from 'react';
import Header from './components/header/Header'
import Logo from './components/logo/Logo'
import styled from 'styled-components'

const StyledContainer = styled.div`
  padding: 0 30px;
`

function App() {
  return (
    <StyledContainer>
      <Header>
        <Logo />
      </Header>
    </StyledContainer>
  );
}

export default App;

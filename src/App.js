import React from 'react';
import MenuNavigation from './components/MenuNavigation';
import Content from './components/Content';
import { Container } from '@mui/material';

function App() {
  return (
    <div>
      <MenuNavigation/>
      <Container sx={{mt:10}}>
        <Content/>
      </Container>
    </div>
  );
}

export default App;

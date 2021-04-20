import React from 'react';
import {Container} from './App.styles';
import music from './music.json';

const App = () => {
  console.log('music', music);
  return (
    <Container>
      <h1>Music Search</h1>
    </Container>
  );
};

export default App;

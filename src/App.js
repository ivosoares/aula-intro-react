import React from 'react';
import './App.css';
import Demo from './components/demo/Demo'
import Text from './components/text/Text';

function App() {
  return (
    <div className="App">
      <Demo></Demo>
      <Text nameclass="falha" text="Falha dentro do cmponente app"></Text>
    </div>
  );
}

export default App;

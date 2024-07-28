import React from 'react';
//import logo from './logo.svg';
import './App.css';
import HomePage from './component/HomePage';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';


function App() {
  return (
    <MantineProvider>
    <HomePage />

  </MantineProvider>
     );
}

export default App;


import React from 'react';
import './App.css';
import { ThemeProvider } from './theming/ThemeProvider';
import { Header } from './components/Header/Header';
import { LocalizationInitiator } from './localization/LocalizationInitiator';

function App() {
  return (
    <div className="App">
      <LocalizationInitiator />
      <ThemeProvider>
        <Header></Header>
      </ThemeProvider>
    </div>
  );
}

export default App;

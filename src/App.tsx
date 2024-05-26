import React from 'react';
import './App.css';
import { ThemeProvider } from './theming/ThemeProvider';
import { LocalizationInitiator } from './localization/LocalizationInitiator';
import { Layout } from './components/Layout/Layout';

function App() {
  return (
    <div className="App">
      <LocalizationInitiator/>
      <ThemeProvider>
        <Layout/>
      </ThemeProvider>
    </div>
  );
}

export default App;

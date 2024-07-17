import React from 'react';
import './App.css';
import { ThemeProvider } from './theming/ThemeProvider';
import { LocalizationInitiator } from './localization/LocalizationInitiator';
import { Layout } from './components/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <LocalizationInitiator/>
        <ThemeProvider>
          <Layout/>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

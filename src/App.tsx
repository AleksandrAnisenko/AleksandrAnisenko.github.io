import React from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { RequireAuth } from './components/RequireAuth/RequireAuth';
import { SingInForm } from './components/Screens/AuthScreen/SignInForm/SignInForm';
import { SingUpForm } from './components/Screens/AuthScreen/SignUpForm/SignUpForm';
import { LocalizationInitiator } from './localization/LocalizationInitiator';
import { initApp } from './store/appSlice';
import { setUser } from './store/userSlice';
import { ThemeProvider } from './theming/ThemeProvider';

function PageNotFound() {
  return (
    <div>
      <h2>404 Page not found</h2>
    </div>
  );
}

function App() {
  const dispatch = useDispatch();
  dispatch(initApp());
  const token: string = localStorage.getItem('token');
  if (token) {
    dispatch(setUser(token));
  }

  return (
    <div className="App">
      <BrowserRouter>
        <LocalizationInitiator />
        <ThemeProvider>
          <Routes>
            <Route
              path="/*"
              element={
                <RequireAuth>
                  <Layout />
                </RequireAuth>
              }
            />
            <Route path="/logIn" element={<SingInForm />} />
            <Route path="/signUp" element={<SingUpForm />} />
            <Route path="/notFound" element={<PageNotFound />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

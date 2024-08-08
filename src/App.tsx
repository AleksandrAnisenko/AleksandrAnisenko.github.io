import React, { useEffect } from 'react';
import './App.css';
import { ThemeProvider } from './theming/ThemeProvider';
import { LocalizationInitiator } from './localization/LocalizationInitiator';
import { Layout } from './components/Layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SingInForm } from './components/Screens/AuthScreen/SignInForm/SignInForm';
import { useDispatch } from 'react-redux';
import { RequireAuth } from './components/RequireAuth/RequireAuth';
import { setUser } from './store/userSlice';
import { initApp } from './store/appSlice';
import { SingUpForm } from './components/Screens/AuthScreen/SignUpForm/SignUpForm';


function PageNotFound() {
  return (
    <div>
       <h2>404 Page not found</h2>
    </div>
  );
}

function App() {

  const dispatch = useDispatch();
  dispatch(initApp())
  const token: string = localStorage.getItem('token');
  if(token) {
    dispatch(setUser(token))
  }
  
  return (
    <div className="App">
      <BrowserRouter>
        <LocalizationInitiator/>
        <ThemeProvider>
        <Routes>
          <Route path='/*' element={
            <RequireAuth>
              <Layout />
            </RequireAuth>
          } />
          <Route path='/logIn' element={<SingInForm />} />
          <Route path='/signUp' element={<SingUpForm />} />
          <Route path='/notFound' element={<PageNotFound />} />
        </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

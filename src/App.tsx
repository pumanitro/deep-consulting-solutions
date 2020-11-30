import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FavoriteCitiesContextProvider } from './globals/FavoritesContext/FavoritesContext';
import {Router} from "./globals/Router/Router";

function App() {

  return (
      <>
          <ToastContainer />
          <FavoriteCitiesContextProvider>
              <Router/>
          </FavoriteCitiesContextProvider>
      </>
  );
}

export default App;

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FavoriteCitiesContextProvider } from './globals/FavoritesContext/FavoritesContext';
import { GeoRedirection } from './globals/GeoRedirection/GeoRedirection';
import {Router} from "./globals/Router/Router";

function App() {

  return (
      <BrowserRouter>
          <GeoRedirection>
              <ToastContainer />
              <FavoriteCitiesContextProvider>
                  <Router/>
              </FavoriteCitiesContextProvider>
          </GeoRedirection>
      </BrowserRouter>
  );
}

export default App;

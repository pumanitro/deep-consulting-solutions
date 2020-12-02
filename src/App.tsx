import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import { CenteredApps } from './globals/CenteredApp/CenteredApp';
import { FavoriteCitiesContextProvider } from './globals/FavoritesContext/FavoritesContext';
import { GeoRedirection } from './globals/GeoRedirection/GeoRedirection';
import { GlobalStyles } from './globals/GlobalStyles/GlobalStyles';
import {Router} from "./globals/Router/Router";
import { CoreTheme } from './globals/Themes/CoreTheme';

function App() {

  return (
      <ThemeProvider theme={CoreTheme}>
          <BrowserRouter>
              <GeoRedirection>
                  <CenteredApps>
                      <GlobalStyles />
                      <ToastContainer />
                      <FavoriteCitiesContextProvider>
                          <Router/>
                      </FavoriteCitiesContextProvider>
                  </CenteredApps>
              </GeoRedirection>
          </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;

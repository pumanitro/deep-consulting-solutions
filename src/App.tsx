import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Router} from "./globals/Router/Router";

function App() {
  return (
      <>
        <ToastContainer />
        <Router/>
      </>
  );
}

export default App;

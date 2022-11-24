import React from 'react';
import Routes from './config/route';
import GlobalStyle from "./config/globalStyle";
import { RouterProvider } from 'react-router';


function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={Routes} />
    </>
  );
}

export default App;

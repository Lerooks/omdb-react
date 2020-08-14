import React from 'react';
import Theme from './style/theme'
import GlobalStyle from './style/global'
import Routes from './config/routes'

function App() {
  return (
    <>
      <Theme>
          <GlobalStyle />
          <Routes />
      </Theme>
    </>
  );
}

export default App;

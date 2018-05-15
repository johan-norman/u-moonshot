import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Karla:400,600,700|Roboto:300,400,600,700');

  body, html {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: 'Karla', sans-serif;
  }

  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

`;

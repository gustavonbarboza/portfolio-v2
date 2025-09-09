import { ThemeProvider } from 'styled-components';

import GlobalStyle from './assets/styles/global';
import defaultTheme from './assets/styles/theme';

import Home from './sections/Home';
import Career from './sections/Career';
import Projects from './sections/Projects';
import SocialMedia from './sections/SocialMedia';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <main>
        <Home />
        <Career />
        <Projects />
        <SocialMedia />
      </main>

    </ThemeProvider>
  );
}

export default App;

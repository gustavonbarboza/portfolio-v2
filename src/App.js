import { ThemeProvider } from 'styled-components';

import GlobalStyle from './assets/styles/global';
import defaultTheme from './assets/styles/theme';

import Navbar from './components/Navbar';
import Home from './sections/Home';
import Career from './sections/Career';
import Projects from './sections/Projects';
import SocialMedia from './sections/SocialMedia';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <header>
        <Navbar />
      </header>

      <main>
        <Home id="home" />
        <Career id="career" />
        <Projects id="projects" />
        <SocialMedia id="social-media" />
      </main>

    </ThemeProvider>
  );
}

export default App;

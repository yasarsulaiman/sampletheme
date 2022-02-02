import logo from './logo.svg';
import './App.css';
import ButtonAppBar from './Components/Header/Header';
import SideBar from './Components/SideBar/Sidebar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Themes/Dark/styles/theme.scss';
import theme from './Themes/Dark/js/theme.json';

const outerTheme = createTheme({
  palette: {
    primary: {
      main: theme['main-primary']
    },
  },
});

console.log({outerTheme});

function App() {
  return (
      <ThemeProvider theme={outerTheme} >
            <div className="App">
              <ButtonAppBar />
              <section>
                <SideBar /> 
              </section>
            </div>
      </ThemeProvider>

  );
}

export default App;

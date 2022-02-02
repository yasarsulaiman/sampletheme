import logo from './logo.svg';
import './App.css';
import ButtonAppBar from './Components/Header/Header';
import SideBar from './Components/SideBar/Sidebar';
import Content from './Components/Content/Content';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { exportedTheme as theme } from './themeprovider';
if(process.env.REACT_APP_THEME === "Dark"){
  import('./Themes/Dark/styles/theme.scss')
}else{
  import('./Themes/Light/styles/theme.scss')
}

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
                <Content />
              </section>
            </div>
      </ThemeProvider>

  );
}

export default App;

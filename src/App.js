import './App.css';
import ButtonAppBar from './Components/Header/Header';
import SideBar from './Components/SideBar/Sidebar';
import Content from './Components/Content/Content';
import { darkTheme,lightTheme,defaultTheme } from './themes';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors'
import { customizeTheme } from './utils/customizeTheme';

function App({theme}) {
  let themeDetails = null;
  if(!theme){
    themeDetails = customizeTheme(defaultTheme);
  }else{
    themeDetails = theme === "dark" ? customizeTheme(darkTheme) : customizeTheme(lightTheme);
  }
  return (
    <ThemeProvider theme={themeDetails} >
        <div className="App">
          <ButtonAppBar />
          {/* <section>
            <SideBar /> 
            <Content />
          </section> */}
        </div>
    </ThemeProvider>
  );
}

export default App;

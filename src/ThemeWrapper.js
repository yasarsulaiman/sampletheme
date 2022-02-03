import React, { useState, useEffect } from 'react';
import axios from 'axios';
import App from './App';

const ThemeWrapper = () => {
  const [theme, setTheme] = useState("");
    
    useEffect(async()=> {
       try{
        const { data: {theme = null} } = await axios.get("http://localhost:4000/theme");
        setTheme(theme);
       }catch(e){
        setTheme(null);
       }
    }, []);

    if(theme === ""){
      return null;
    }
    return (
      <div>
        <App theme={theme} />
      </div>
    )
}

export default ThemeWrapper
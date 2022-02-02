import darkTheme from './Themes/Dark/js/theme.json';
import lightTheme from './Themes/Light/js/theme.json';

export const exportedTheme = process.env.REACT_APP_THEME === 'Dark' ? darkTheme : lightTheme;

import React from 'react';

export const ThemeContext = React.createContext({
    theme: {
        type: 'light',
        primary: '#020181',
        b200: '#6694F6',
        black: '#000000',
        darkText: '#353F50',
        neutral30: '#AAB7C6',
        neutral20: '#F3F5F6',
        neutral10: '#FFFFFF',
        borderColor: "rgba(170, 183, 198, 0.2)"
    },
    setTheme: () => { }
})
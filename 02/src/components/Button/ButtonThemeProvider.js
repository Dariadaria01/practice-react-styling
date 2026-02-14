import React, { createContext } from 'react';

export const ButtonThemeContext = createContext();

const defaultTheme = {
    variants: {
        primary: {
            background: '#0d6efd',
            color: '#fff',
        },
        secondary: {
            background: '#6c757d',
            color: '#fff',
        },
    },
    sizes: {
        sm: {
            padding: '0.25rem 0.5rem',
            fontSize: '0.875rem',
        },
        lg: {
            padding: '0.5rem 1rem',
            fontSize: '1.25rem',
        },
    },
};

const ButtonThemeProvider = ({ theme = defaultTheme, children }) => {
    return (
        <ButtonThemeContext.Provider value={theme}>
            {children}
        </ButtonThemeContext.Provider>
    );
};

export default ButtonThemeProvider;
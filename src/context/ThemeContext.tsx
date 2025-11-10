import React, { createContext, useContext, useReducer, type ReactNode } from 'react';

interface ThemeState {
  isDarkMode: boolean;
}

type ThemeAction = { type: 'TOGGLE_THEME' } | { type: 'SET_THEME'; payload: boolean };

const initialState: ThemeState = {
  isDarkMode: false,
};

const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    case 'SET_THEME':
      return {
        ...state,
        isDarkMode: action.payload,
      };
    default:
      return state;
  }
};

interface ThemeContextType extends ThemeState {
  toggleTheme: () => void;
  setTheme: (isDark: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  const toggleTheme = (): void => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  const setTheme = (isDark: boolean): void => {
    dispatch({ type: 'SET_THEME', payload: isDark });
  };

  const value: ThemeContextType = {
    ...state,
    toggleTheme,
    setTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
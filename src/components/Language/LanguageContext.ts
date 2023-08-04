import { createContext } from 'react';
import { LanguageContextProps } from './types'; // adjust the path based on where you put your types.ts

export const LanguageContext = createContext<LanguageContextProps>({
  currentLanguage: 'TH',
  setCurrentLanguage: () => { },
});

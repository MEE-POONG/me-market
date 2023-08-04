export type Language = 'EN' | 'TH';

export interface LanguageContextProps {
    currentLanguage: Language;
    setCurrentLanguage: (lang: Language) => void;
} 
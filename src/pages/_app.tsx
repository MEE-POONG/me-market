import React, { useState, useEffect } from "react";
import type { AppProps } from 'next/app';
import { LanguageContext } from '@/components/Language/LanguageContext';
import { Language } from '@/components/Language/types';
import '@/assets/scss/index.scss';
import Router from 'next/router';
import Loading from "@/components/Loadding";

export default function App({ Component, pageProps }: AppProps) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('TH');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: string) => setLoading(true);
    const handleComplete = (url: string) => setLoading(false);

    Router.events.on('routeChangeStart', handleStart);
    Router.events.on('routeChangeComplete', handleComplete);
    Router.events.on('routeChangeError', handleComplete);

    return () => {
      Router.events.off('routeChangeStart', handleStart);
      Router.events.off('routeChangeComplete', handleComplete);
      Router.events.off('routeChangeError', handleComplete);
    };
  }, []);

  return (
    <React.Fragment>
      <LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage }}>
        {loading ? (
          <Loading />
        ) : (
          <Component {...pageProps} />
        )}
      </LanguageContext.Provider>
    </React.Fragment>
  )
}

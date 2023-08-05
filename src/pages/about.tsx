import React, { useContext,} from 'react';
import { LanguageContext } from '@/components/Language/LanguageContext';
import Head from 'next/head'
import TheLayout from '@/components/TheLayout'
// import Categories from '@/container/Home/Categories'
// import Price from '@/container/Home/Price'
// import Currently from '@/container/Home/Currently'
const AboutPage: React.FC = () => {
  const { currentLanguage } = useContext(LanguageContext);

  return (
    <TheLayout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Me Prompt Technology</title>
      </Head>
      <div className='home-page'>
        {/* <Categories />
        <Price />
        <Currently /> */}
      </div>
    </TheLayout>
  )
}
export default AboutPage;

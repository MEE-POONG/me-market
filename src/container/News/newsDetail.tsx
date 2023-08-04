import Head from 'next/head'
import TheLayout from '@/components/TheLayout'
import Discover from '@/container/News/Discover'
import TopSeller from '@/container/News/TopSeller'
const NewsDetail: React.FC = () => {
  return (
    <TheLayout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Me Prompt Technology</title>
      </Head>
      <div className='news-page'>
        <Discover />
        <TopSeller />
      </div>
    </TheLayout>
  )
}

export default NewsDetail;
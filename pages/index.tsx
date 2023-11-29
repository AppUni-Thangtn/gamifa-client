import Image from 'next/image';
import { Inter } from 'next/font/google';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const res = await fetch(
    'https://education-api.iceo.tech/api/channel/list?domain=https://staging.gamifa.com'
  );
  const channelData = (await res.json())[0];

  return {
    props: {
      fonts: inter,
      title: channelData.name,
      icon: channelData.avatar.media_url,
      description: channelData.description,
    },
  };
};

export default function Home({ title, icon, description }: any) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" type="image/x-icon" href={icon}></link>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} key="title" />
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      ></main>
    </>
  );
}

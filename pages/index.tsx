import Image from 'next/image';
import { Inter } from 'next/font/google';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const host = context.req.headers.host;

  const url = 'gamifa-client.vercel.app';

  const res = await fetch(
    `https://staging-api.gamifa.vn/api/channel/list?domain=${url}`
  );
  const channelData = (await res.json())[0];
  console.log('data', channelData);

  return {
    props: {
      host: host,
      fonts: inter,
      title: channelData.name,
      icon: channelData.avatar.media_url,
      description: channelData.description,
    },
  };
};

export default function Home({ host, title, icon, description }: any) {
  console.log('title', title);
  console.log('host', host);
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

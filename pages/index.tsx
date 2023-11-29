import Image from 'next/image';
import { Inter } from 'next/font/google';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  console.log('context.req', context.req.headers['host']);
  return {
    props: {
      fonts: inter,
      title: 'Thang Trinh',
    },
  };
};

export default function Home({ title }: any) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      ></main>
    </>
  );
}

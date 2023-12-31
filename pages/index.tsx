import Image from 'next/image';
import { Inter } from 'next/font/google';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import LeftDiv from '@/components/LeftDiv';
import RightDiv from '@/components/RightDiv';

const inter = Inter({ subsets: ['latin'] });

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const host = context.req.headers.host || 'staging.gamifa.com';
  // const host = 'staging.gamifa.com';
  const url = `https://${host}`;

  const serverUrl =
    process.env.SERVER_URL || 'https://staging-api.gamifa.vn/api';

  const res = await fetch(`${serverUrl}/channel/list?domain=${url}`);
  const channelData = (await res.json())[0];

  return {
    props: {
      fonts: inter,
      host: host,
      title: channelData.name,
      icon: channelData.avatar.media_url,
      shortDescription: channelData.short_description,
      description: channelData.description,
      domain: url,
    },
  };
};

export default function Home({
  host,
  title,
  icon,
  description,
  shortDescription,
  domain,
}: any) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" type="image/x-icon" href={icon}></link>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} key="title" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={icon} />
        <meta property="og:image:alt" content={shortDescription} />

        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image:src" content={icon} />
        <meta name="twitter:image:alt" content={shortDescription} />
      </Head>

      <main className="bg-[#fff]">
        <div className=" max-w-screen-xl m-auto">
          <div className="flex min-h-screen flex-row items-center justify-between">
            <LeftDiv name={title} description={shortDescription} />
            <RightDiv imageUrl={icon} name={title} domain={domain} />
          </div>
        </div>
      </main>
    </>
  );
}

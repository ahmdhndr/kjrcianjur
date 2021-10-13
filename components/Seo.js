import Head from 'next/head';

export default function Seo({ title, description, keyword }) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keyword} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
}

Seo.defaultProps = {
  title: 'KJR Cianjur',
  keyword:
    'kjr, keren tanpa rokok, kjs, yayasan jantung, jantung, remaja, olahraga, senam, sehat',
  description:
    'KJR Cianjur adalah sebuah program dari Yayasan Jantung Indonesia',
};

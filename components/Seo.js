import Head from 'next/head';
import { BASE_URL } from '../config';

export default function Seo({
  title,
  description,
  keyword,
  ogUrl,
  ogType,
  ogTitle,
  ogDescription,
  ogImage,
  ogImageAlt,
  ogLocale,
}) {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keyword} />
      <meta name='description' content={description} />
      <meta name='og:url' content={ogUrl} />
      <meta name='og:type' content={ogType} />
      <meta name='og:title' content={ogTitle} />
      <meta name='og:description' content={ogDescription} />
      <meta name='og:image' content={ogImage} />
      <meta name='og:image:alt' content={ogImageAlt} />
      <meta name='og:locale' content={ogLocale} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
    </Head>
  );
}

Seo.defaultProps = {
  title: 'KJR Cianjur',
  keyword:
    'KJR, KJS, YJI, Jantung, Sehat, Klub Jantung Remaja, Klub Jantung Sehat, Yayasan Jantung Indonesia',
  description:
    'KJR Cianjur adalah website berbasis artikel sebagai media tulis bagi anggota KJS atau KJR Cianjur.',
  ogUrl: BASE_URL,
  ogType: 'article',
  ogTitle: 'KJR Cianjur',
  ogDescription:
    'KJR Cianjur adalah website berbasis artikel sebagai media tulis bagi anggota KJS atau KJR Cianjur.',
  ogImage: '/images/bg_home.jpg',
  ogImageAlt: 'Foto KJR Cianjur',
  ogLocale: 'id_ID',
};

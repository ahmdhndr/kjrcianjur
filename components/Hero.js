export default function Hero({
  imgSrc,
  imgAlt,
  heroTitle,
  heroSubTitle,
  objPos,
}) {
  return (
    <section className="hero relative flex max-h-hero mt-12 overflow-hidden bg-white">
      {imgSrc === '/images/img-default.png' ? (
        <img
          src={imgSrc}
          alt="Background KJR"
          className="w-96 h-96 relative top-1/2 left-1/2 transform -translate-x-1/2"
        />
      ) : (
        <img
          src={imgSrc}
          alt={imgAlt}
          className={`w-full object-cover ${objPos ? objPos : 'object-center'}`}
        />
      )}
      <div
        className={`absolute left-0 top-0 flex flex-col items-center justify-center min-h-full ${
          heroTitle || heroSubTitle ? 'bg-blue-900 bg-opacity-50' : ''
        } text-white w-full`}
      >
        {heroTitle && <h2 className="text-4xl font-bold">{heroTitle}</h2>}
        {heroSubTitle && <p className="text-center">{heroSubTitle}</p>}
      </div>
    </section>
  );
}

Hero.defaultProps = {
  imgSrc: '/images/img-default.png',
  heroTitle: 'KJR Cianjur',
  heroSubTitle: 'We Are The Future',
  objPos: 'object-center',
};

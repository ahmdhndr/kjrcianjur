import ScaleLoader from 'react-spinners/ScaleLoader';

export default function Loading({ loading }) {
  return (
    <div className={loading ? 'body-loading' : 'none'}>
      <ScaleLoader
        height={35}
        width={4}
        radius={2}
        margin={2}
        color={'#e5e7eb'}
        loading={loading}
        speedMultiplier={1}
      />
    </div>
  );
}

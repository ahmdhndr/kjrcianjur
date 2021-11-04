import DotLoader from 'react-spinners/DotLoader';

export default function Loading({ loading }) {
  return (
    <div className={loading ? 'body-loading' : 'none'}>
      <DotLoader
        size={60}
        color={'#e5e7eb'}
        loading={loading}
        speedMultiplier={1}
      />
    </div>
  );
}

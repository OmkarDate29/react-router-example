import { Link } from 'react-router-dom';

export default function Errors() {
  const path = window.location.pathname;
  return (
    <div className='p-8'>
      <h1 className='text-3xl font-bold mb-4'>404 Not Found</h1>
      <p>connot get {path}</p>
      <Link
        to={'/home'}
        className='bg-blue-600 hover:bg-blue-700 text-white font-bold my-8 py-2 px-4 rounded'
      >
        Home
      </Link>
    </div>
  );
}

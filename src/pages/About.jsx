import { Link, useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(-1); // this will go back to the previous page
  };

  return (
    <div className='p-8'>
      <h1 className='text-3xl font-bold mb-4'>About works</h1>
      <button
        className='bg-blue-600 hover:bg-blue-700 text-white font-bold my-8 py-2 px-4 rounded'
        onClick={onClick}
      >
        Home
      </button>
    </div>
  );
}

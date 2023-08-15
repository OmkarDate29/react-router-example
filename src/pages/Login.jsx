import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Login({ setUser }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  // here 'state.from' comes from `<Navigate />` component in `ProtectedRoute.js`
  const prevPath = location.state?.from?.pathname || '/home'; // when you use `useLocation()` hook in `ProtectedRoute.js`
  // const prevPath = location.state?.from || '/home'; // when you use 'window.location.pathname' in `ProtectedRoute.js`

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) return;
    setUser({ name: name, email: email });
    navigate(prevPath, { replace: true }); // this will help you to back to the page you were before login
  };

  return (
    <section className='section'>
      <form className='form' onSubmit={(e) => handleSubmit(e)}>
        <h5>login</h5>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            email
          </label>
          <input
            type='email'
            className='form-input'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-block'>
          login
        </button>
      </form>
    </section>
  );
}

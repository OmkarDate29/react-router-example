import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Products from './pages/Products';
import Errors from './pages/Errors';
import Nav from './pages/Nav';
import Document from './pages/Document';
import Default from './pages/Default';
import SingleProduct from './pages/SingleProduct';
import Login from './pages/Login';
import User from './pages/User';
import ProtectedRoute from './pages/ProtectedRoute';

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter basename='/'>
      <Nav user={user} />
      {/*
      Note the position where 'Nav' is placed, outside the 'Routes' component.
      You can also add 'Footer' component after closing 'Routes' component.
      Now this 'Nav' will be rendered on all the routes.
      */}
      <Routes>
        {/* <Route index element={<h1>Hello World</h1>} /> */}
        {/* This is nesting of routes, here components of nested routes will be rendered on
          component of parent route only (here parent route is '/' and component of parent route is 'Home')
          This will be done by 'Outlet' component, this is required in parent component.
          Position of 'Outlet' component in parent component decides where this nested components will be renderd */}
        <Route path='/home' element={<Home user={user} />}>
          {/* If we remove `element={<Home user={user} />}` from here
          then routes will not be rendered on 'Home' component at 'Outlet'
          and '<Default />' will be rendered at '/home' route bcoz it has 'index' property */}
          <Route index element={<Default />} />
          {/* And if we don't remove `element={<Home user={user} />}`
          then '<Default />' will be rendered at 'Outlet' in 'Home' component, bcoz it has 'index' property */}

          {/* When we use nesting their is no need of using '/' in front of route path
          e.g., use path='products' not path='/products' */}
          <Route element={<ProtectedRoute user={user} />}>
            {/* Here in `ProtectedRoute` first user is present or not is checked */}
            <Route path='products' element={<Products />} />
            <Route path='products/:productId' element={<SingleProduct />} />
          </Route>
          {/* Here productId is parameter, try to console log productId in 'SingleProduct' component.
          This is done by 'useParams' hook of 'react-router-dom' */}

          <Route path='about' element={<About />} />
        </Route>

        <Route path='/login' element={<Login setUser={setUser} />} />
        {/* <Route path="/user" element={<User user={user} />} /> */}

        <Route element={<ProtectedRoute user={user} />}>
          <Route path='/user' element={<User user={user} />} />
        </Route>

        <Route path='/document' element={<Document />} />

        <Route path='*' element={<Errors />} />
        {/* It will be rendered when no route is matched.
        '*' means any route. (Any other except that we have used above) */}
      </Routes>
    </BrowserRouter>
  );
}

/*
*****

Routes and Route are two different components.
- Routes is a parent component.
- Route is a child component.

1. <Route index element={<Home />} /> // (this is defalut route)(Works good for nested routes)
2. <Route path="/" element={<Home />} />
- Both them are almost same.
- But when both of them are used then the Route having 'index' property will be rendered as home route.
- 'index' property has higher priority than 'path' prop.
- You can use any of them.

<Route path="*" element={<Errors />} />
- It will be rendered when no route is matched.
- '*' means any route. (Any other except that we have used above)

In home page we have used 'Outlet' component.
- It will render the child routes of the current route.

*****
*/

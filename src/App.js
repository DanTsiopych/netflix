import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';

import Main from './components/Main';
import SearchInput from './components/SearchInput';
import Layout from './components/Layout';
import MovieDetails from './components/MovieDetails';
import Error404 from './components/Error404';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />} >
    <Route index element={<Main />} />
    <Route path='search' element={<SearchInput />} />
    <Route path='movie/:id' element={<MovieDetails />} />
    <Route path='*' element={<Error404 />}/>
  </Route>
))


function App() {

  return (
    <div className="wrapper">
      <div className='container'>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;

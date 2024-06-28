import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import SearchInput from './components/SearchInput';


function App() {
  const [search, setSearch] = useState(true)
  const [filmInfo, setFilmInfo] = useState(false)
  return (
    <div className="wrapper">
      <div className='container'>
          <Header setSearch={setSearch} setFilmInfo={setFilmInfo} filmInfo={filmInfo} />
          <SearchInput search={search} />
          <Main search={search} setFilmInfo={setFilmInfo} filmInfo={filmInfo} />
          <Footer />
      </div>
    </div>
  );
}

export default App;

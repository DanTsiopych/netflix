import React, { useState, useEffect } from 'react';
import './styled.css';
import { useParams, Link } from 'react-router-dom';
import RecommendMovie from '../RecommendMovie';


const RecommendMovies = () => {
  const { id } = useParams();
  const [recommendMovies, setRecommendMovies] = useState([])


  const getFilterRecommendedMovies = (id) => {

    fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1&api_key=737b9c89bea1ebcd53b5cd2a12ee5fe7`)
      .then(response => response.json())
      .then(response => {
        const filteredMovies = filterRecommendedMovies(
          response.results)
        setRecommendMovies(filteredMovies)
      })
      .catch(err => console.error(err));
  }

  const filterRecommendedMovies = (movies) => {
    return movies.slice(0, 5);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    getFilterRecommendedMovies(id);
  }, [id])

  return (
      <div className='recommendMovies-block'>
        <h3>You might like</h3>
        <div className='recommendMovies'>
          {recommendMovies.length > 0 ? recommendMovies.map((item, index) => {
            return (
              <Link to={`/movie/${item.id}`} onClick={() => scrollToTop()}>
                <RecommendMovie
                  key={index}
                  title={item.title}
                  overview={item.overview}
                  background={item.poster_path}
                  id={item.id}
                />
              </Link>
            )
          }) : <p>Recommended movies are not available at this time</p>} 
        </div>
      </div>
  )
};

export default RecommendMovies;

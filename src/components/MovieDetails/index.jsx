import React, { useEffect, useState } from 'react'
import './styled.css'
import { useParams } from 'react-router-dom'
import YouTube from 'react-youtube'
import RecommendMovies from '../RecommendMovies'
import Error404 from '../Error404'


function MovieDetails() {
  const { id } = useParams()
  const [movieDetails, setMovieDetails] = useState({})
  const IMG = 'https://image.tmdb.org/t/p/w500';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzdiOWM4OWJlYTFlYmNkNTNiNWNkMmExMmVlNWZlNyIsInN1YiI6IjY2NzVjNjM5MTk3Y2I4ZTA5NjViNDVkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y0jBpBAxhpocMcAyAu8ZWOfyWPquXk942tb2iwcUn7o'
    }
  };

  const fetchMovie = (id) =>
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=737b9c89bea1ebcd53b5cd2a12ee5fe7&append_to_response=videos`, options)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        setMovieDetails(response)
      })
      .catch(err => console.error(err));

  useEffect(() => {
    fetchMovie(id)
  }, [id])

  function getTrailer() {
    const trailer = movieDetails.videos.results.find(item => item.type == 'Trailer');
    if (trailer) {
      return <YouTube id={trailer.id} videoId={trailer.key} className='trailer-video' />
    }
    return <p style={{ textAlign: 'center' }}>(We apologize, the trailer is not available)</p>
  }

  function getTrailerTitle() {
    const trailerTitle = movieDetails.videos.results.find(item => item.type == 'Trailer');
    if (trailerTitle) {
      return trailerTitle.name
    }
    return 'Error'
  }

  return (
    <>
      {movieDetails && movieDetails.status_code !== 34 ?
        <section className='movie-details-block'>
          <div className='movie-details'>
            <div className='movie-poster-block'>
              <img
                className='movie-poster'
                src={`${IMG}${movieDetails.poster_path}`}
              />
            </div>
            <div className='movie-info'>
              <div className='movie-title-info'>
                {movieDetails.title && <h4 className='movie-title'>{movieDetails.title}</h4>}
                {movieDetails.vote_average && movieDetails.popularity && <p className='movie-rating'>{(movieDetails.vote_average).toFixed(1)} ({Math.ceil(movieDetails.popularity)} rated)</p>}
              </div>
              <div className='movie-description'>
                {movieDetails.release_date && <p>Year: {movieDetails.release_date.substr(0, 4)}</p>}
                {movieDetails.production_countries && <p>Countries: {movieDetails.production_countries.map(country => country.name).join(', ')}</p>}
                {movieDetails.genres && <p className="genres">Genres:{movieDetails.genres.map((genre, index) => <span key={index} className='movie-genre'>{genre.name}</span>)}</p>}
                {movieDetails.release_date && <p>Release date: {movieDetails.release_date.split('-').reverse().join('.')}</p>}
                {movieDetails.runtime && <p>Runtime: {(movieDetails.runtime / 60).toFixed(1)} hours</p>}
                {movieDetails.overview && <p>Overview: {movieDetails.overview}</p>}
              </div>
            </div>
          </div>
          <div className='trailer-block'>
            {movieDetails.videos ? <h3 className='trailer-title'>{getTrailerTitle() === 'Error' ? null : getTrailerTitle()}</h3> : null}
            <div className='trailer-player'>
              {movieDetails.videos ? getTrailer() : null}
            </div>
          </div>
          <RecommendMovies />
        </section>
        : <Error404 />}
    </>
  )
}

export default MovieDetails

import React, { useState, useEffect } from 'react';
import './styled.css';
import FilmCard from '.././FilmCard'
import useDebounce from '../../hooks/useDebounce';


const SearchInput = () => {

    const [inputValue, setInputValue] = useState('')
    const [movies, setMovies] = useState([])


    const debouncedValue = useDebounce(inputValue, 500)

    const changeValue = (event) => {
        setInputValue(event.target.value);
    };

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzdiOWM4OWJlYTFlYmNkNTNiNWNkMmExMmVlNWZlNyIsIm5iZiI6MTcxOTIxNTU3Ny4yODgyMzgsInN1YiI6IjY2NzVjNjM5MTk3Y2I4ZTA5NjViNDVkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ud5oY9Hf9mJlWP70VfqXq1Ljt9Uxr7FMLN03YUNFRPw'
        }
    };


    const fetchMovies = async (inputValue) => {



        fetch(`https://api.themoviedb.org/3/search/movie?query=${inputValue}&api_key=737b9c89bea1ebcd53b5cd2a12ee5fe7`, options)
            .then(response => response.json())
            .then(response => {
                setMovies(response.results)

            })
            .catch(err => console.error(err));

    }

    useEffect(
        () => {
            fetchMovies(debouncedValue)
        }, [debouncedValue]
    )

    if (movies.length > 20) setMovies(movies.slice(0, 20))

    return (
        <div className='searchInput'>
            <input
                type='text'
                placeholder='Batman, Joker etc'
                className='input'
                onChange={changeValue}
            />
            {inputValue !== "" ?
                <> <div className='search-title_block'>
                    <h4 className='search-title'>{`Results for "${inputValue}"`}</h4>
                </div>

                    <div className='searchResults'>
                        {movies.map(user => {
                            return <FilmCard
                                background={user.poster_path}
                                title={user.title}
                                vote={user.vote_average}
                                year={user.release_date}
                                id={user.id}
                            />
                        })}
                    </div>
                </>
                : ''}
        </div>
    )
};


export default SearchInput

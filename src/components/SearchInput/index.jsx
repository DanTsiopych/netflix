import React, { useState, useMemo } from 'react';
import './styled.css';
import FilmCard from '.././FilmCard'

const SearchInput = ({ search }) => {

    const users = [];

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzdiOWM4OWJlYTFlYmNkNTNiNWNkMmExMmVlNWZlNyIsIm5iZiI6MTcxOTIxNTU3Ny4yODgyMzgsInN1YiI6IjY2NzVjNjM5MTk3Y2I4ZTA5NjViNDVkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ud5oY9Hf9mJlWP70VfqXq1Ljt9Uxr7FMLN03YUNFRPw'
        }
    };

    const [inputValue, setInputValue] = useState('')
   
    
       
        for (let page = 1; page <= 10; page++) {
            fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`, options)
                .then(response => response.json())
                .then(response => {
                    console.log(response)
                    users.push(...response.results);
                })
                .catch(err => console.error(err));
        }
    


    console.log(users)
    const [filteredUsers, setFilteredUsers] = useState(users);

    const handleFilter = (event) => {
        setInputValue(event.target.value)
        const value = event.target.value.toLowerCase();
        const filtered = users.filter(user => user.title.toLowerCase().includes(value));
        setFilteredUsers(filtered);
    };

    if (filteredUsers.length > 20) setFilteredUsers(filteredUsers.slice(0, 20))

    return (
        <div className={search ? 'searchInput no-active' : 'searchInput'}>
            <input
                type='text'
                placeholder='Batman, Joker etc'
                className='input'
                onChange={handleFilter}

            />
            {inputValue !== '' ?
                <> <div className='seact-title_block'>
                    <h4 className='search-title'>{`Results for "${inputValue}"`}</h4>
                </div>

                    <div className='searchResults'>
                        {filteredUsers.map(user => {
                            return <FilmCard
                                background={user.poster_path}
                                title={user.title}
                                vote={user.vote_average}
                                year={user.release_date}
                            />
                        })}
                    </div>
                </>
                : ''}
        </div>
    )
};

export default SearchInput;

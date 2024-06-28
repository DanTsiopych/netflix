import React, { useState, useEffect } from 'react';
import './styled.css'
import FilmCard from './../FilmCard';
import Pagination from '../Pagination';

const FilmBlock = ({ title, name }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [posts, setPosts] = useState([])
    

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzdiOWM4OWJlYTFlYmNkNTNiNWNkMmExMmVlNWZlNyIsInN1YiI6IjY2NzVjNjM5MTk3Y2I4ZTA5NjViNDVkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y0jBpBAxhpocMcAyAu8ZWOfyWPquXk942tb2iwcUn7o'
        }
    };


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${name}?language=en-US&page=${currentPage}`, options)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                setPosts(response.results)
            })
            .catch(err => console.error(err));
    }, [currentPage])


    



    return (
        <div className='film-block'>
                <div className='title-block'>
                    <h4 className='film-title'>{title}</h4>
                </div>
                <div className='films'>
                        {posts.map((item, index) => {
                        return (
                            <FilmCard
                                background={item.poster_path}
                                title={item.title}
                                vote={item.vote_average}
                                year={item.release_date}
                                key={index}
                            />
                        )
                    })} 
                </div>
            <Pagination
                setCurrentPage={setCurrentPage}
            /> 
        </div>
    )
};

export default FilmBlock;














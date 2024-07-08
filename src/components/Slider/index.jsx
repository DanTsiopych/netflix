import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import './styled.css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

import { Link } from 'react-router-dom';


const Slider = () => {

    const [movies, setMovies] = useState([])

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzdiOWM4OWJlYTFlYmNkNTNiNWNkMmExMmVlNWZlNyIsInN1YiI6IjY2NzVjNjM5MTk3Y2I4ZTA5NjViNDVkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y0jBpBAxhpocMcAyAu8ZWOfyWPquXk942tb2iwcUn7o'
        }
    };

    useEffect(() => {



        fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                setMovies(response.results);
            })
            .catch(err => console.error(err));
    }, [])




    return (
        <>
            {movies && movies.length > 0 && (
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    loop={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >

                    {movies.map((item, index) => {


                        return (
                            <SwiperSlide key={index} className='swiper'>
                                <div className='poster-wrapper'>
                                    <img
                                        className='poster'
                                        src={`https://image.tmdb.org/t/p/w1280/${item.backdrop_path}`}
                                        alt='poster' />
                                </div>
                                <div className={item.title.length <= 32 && item.overview.length <= 350 ? 'poster-content' : 'poster-content modified'}>
                                    <h2 className='title'>{item.title}</h2>
                                    <p className='overview'>{item.overview}</p>
                                    <div className='film-info'>
                                        <span className='vote_average'>{item.vote_average.toFixed(1)}</span>
                                        <p className='release_year'>{item.release_date.slice(0, 4)}</p>
                                        <Link to={`/movie/${item.id}`} className='trailer'>Play Trailer</Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            )}
        </>
    );
};

export default Slider;


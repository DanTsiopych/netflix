import React from 'react';
import Slider from '../Slider';
import './styled.css';
import FilmBlock from '../FilmBlock';
const Main = () => {
    return (
        <main className='main'>
            <div className='movies-slider'>
                <Slider />
            </div>
            <div className='films-block'>
                <FilmBlock id='best' name='top_rated' title='Best of all time' />
                <FilmBlock id='trending' name='now_playing' title='Trending' />
                <FilmBlock id='upcoming' name='upcoming' title='Upcoming' />

            </div>
        </main>
    )
};

export default Main;

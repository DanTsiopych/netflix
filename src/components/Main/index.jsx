import React from 'react';
import Slider from '../Slider';
import './styled.css';
import FilmBlock from '../FilmBlock';
const Main = ({search}) => {
    return (
        <main className={search ? 'main' : 'main no-active'}>
            <div className='movies-slider'>
                <Slider />
            </div>
            <div className='films-block'>
                <FilmBlock name='top_rated' title='Best of all time' />
                <FilmBlock name='now_playing' title='Trending' />
                <FilmBlock name='upcoming' title='Upcoming' />

            </div>
        </main>
    )
};

export default Main;

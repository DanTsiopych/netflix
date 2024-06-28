import React, { useState, } from 'react';
import './styled.css';
import Player from '../../imgs/play-button_ls.png';



const FilmCard = ({ background, title, vote, year }) => {

    const [currentState, setCurrentState] = useState(false)



    return (
        <div className='card'>
            <div className='card-imgs'
                onMouseEnter={() => setCurrentState(true)}
                onMouseLeave={() => setCurrentState(false)}
            >
                <img className={currentState ? 'player active' : 'player'} src={Player} />
                <img className='card-img' src={`https://image.tmdb.org/t/p/w500/${background}`}
                />
            </div>
            <h5 className='card-title'>{title.length <= 21 ? title : title.slice(0, 22) + '...'}</h5>
            <div className='card-subtitle'>
                <p className='card-rating'>{vote.toFixed(1)}</p>
                <p className='card-year'>{year.slice(0, 4)}</p>
            </div>
        </div>
    )
};

export default FilmCard;

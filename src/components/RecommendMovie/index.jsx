import React, { useState } from 'react';
import './styled.css';




const RecommendMovie = ({ title, overview, background, id }) => {
    const [currentState, setCurrentState] = useState(false)

    if (overview.length > 80) {
        overview = `${overview.slice(0, 80)}...`
    }
    const IMG = 'https://image.tmdb.org/t/p/w500';


    return (
        <>
            {title && overview && background ? (
                <div className='recommendMovie'
                    onMouseEnter={() => setCurrentState(true)}
                    onMouseLeave={() => setCurrentState(false)}
                >
                    <img className='recommendMovie-poster' src={`${IMG}${background}`} />
                    <div className={currentState ? 'recommendMovie-description isActive' : 'recommendMovie-description'}>
                        <h4>{title}</h4>
                        <p>{overview}</p>
                    </div>
                </div>
            ) : undefined}
        </>
    )

};

export default RecommendMovie;

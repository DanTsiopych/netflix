import React, {useState} from 'react';
import  './styled.css';


const Pagination = ({setCurrentPage}) => {
    
    const pages = [1, 2, 3, 4, 5]
    
    return (
        <div className='pagination'>
            {pages.map((item, index) => {
                return (
                    <a href='#'
                        key={index}
                        className='pagination-button'
                        onClick={(event) => {
                            event.preventDefault();
                            setCurrentPage(item);
                        }}
                    >
                        {item}
                    </a>
                )
            })}
        </div>
    )
};

export default Pagination;

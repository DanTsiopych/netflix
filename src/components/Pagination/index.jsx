import React from 'react';
import  './styled.css';


const Pagination = ({currentPage, setCurrentPage}) => {
    
    const pages = [1, 2, 3, 4, 5]
    
    return (
        <div className='pagination'>
            {pages.map((item, index) => {
                return (
                    <a href='#'
                        key={index}
                        className={currentPage === item ? 'pagination-button active' : 'pagination-button'}
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

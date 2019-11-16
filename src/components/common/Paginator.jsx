import React, {useState} from 'react';
import {Pagination} from "react-bootstrap";

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <Pagination className='paginator'>
            { portionNumber > 1 &&
            <Paginator.First onClick={() => { setPortionNumber(portionNumber - 1)}} />}
            { pages
                .filter(page => page >= leftPortionPageNumber && page <=rightPortionPageNumber)
                .map(page => {
                return <Pagination.Item
                    active={page === currentPage}
                    onClick={(e) => {
                        onPageChanged(page)
                    }}>{page}</Pagination.Item>
            })}

            { portionCount > portionNumber &&
                <Pagination.Last onClick={() => { setPortionNumber(portionNumber +1)}} /> }
        </Pagination>
    )
};

export default Paginator;
import React, {useState} from "react";
import css from './Paginator.module.scss';

let Paginator = ({totalItemsCount, pageSize, onCurrentPageClick, currentPage, portionSize = 10}) => {

    let pageCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pageCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={css.pagination}>
            {portionNumber > 1 && <button
                className={css.siteButton + ' ' + css.btnPrev}
                onClick={() => setPortionNumber(portionNumber-1)}>назад</button>}
            {pages
                .filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <span key={p}
                                 onClick={() => onCurrentPageClick(p)}
                                 className={currentPage === p && css.selectedPage}>
                         {p}
                     </span>
                })}
             { portionCount > portionNumber && <button
                 className={css.siteButton}
                 onClick={() => setPortionNumber(portionNumber + 1)}>вперёд</button>}
        </div>
    )
};

export default Paginator;
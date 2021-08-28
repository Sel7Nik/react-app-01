import { useState } from 'react';
import css from './Paginator.module.css';
import cn from 'classnames';

type PropsPaginatorType = {
  currentPage: number
  totalItemsCount: number
  pageSize: number
  onPageChanged: (pageNumber: number) => void
  portionSize?: number

}
let Paginator: React.FC<PropsPaginatorType> = ({
  currentPage,
  totalItemsCount,
  pageSize,
  onPageChanged,
  portionSize = 10,
  ...props
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages: Array<number> = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNamber, setPortionNamber] = useState(1);
  let leftPortionPageNamber = (portionNamber - 1) * portionSize + 1;
  let rightPortionPageNamber = portionNamber * portionSize;
  return (
    <div className={css.paginator}>
      {' '}
      {portionNamber > 1 && (
        <button
          onClick={() => {
            setPortionNamber(portionNamber - 1);
          }}
        >
          PREV
        </button>
      )}
      {pages
        .filter(
          (pageNumber) =>
            pageNumber >= leftPortionPageNamber && pageNumber <= rightPortionPageNamber
        )
        .map((pageNumber) => {
          return (
            <span
              className={cn(
                { [css.selectedPage]: currentPage === pageNumber },
                css.pageNumber
              )}
              key={pageNumber}
              onClick={(even) => {
                onPageChanged(pageNumber);
              }}
            >
              {pageNumber + ' '}
            </span>
          );
        })}
      {portionCount > portionNamber && (
        <button
          onClick={() => {
            setPortionNamber(portionNamber + 1);
          }}
        >
          NEXT
        </button>
      )}
    </div>
  );
};

export default Paginator;

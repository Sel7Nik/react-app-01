import { useState } from 'react';
import css from './Paginator.module.css';
import cn from 'classnames';

type PropsType = {
  currentPage: number
  totalItemsCount: number
  pageSize: number
  onPageChanged: () => void
  portionSize: number

}
let Paginator: React.FC<PropsType> = ({
  currentPage,
  totalItemsCount,
  pageSize,
  onPageChanged,
  portionSize = 10,
  ...props
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let portionCount = Math.ceil(pagesCount, portionSize);
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
          (page) =>
            page >= leftPortionPageNamber && page <= rightPortionPageNamber
        )
        .map((page) => {
          return (
            <span
              className={cn(
                { [css.selectedPage]: currentPage === page },
                css.pageNumber
              )}
              key={page}
              onClick={(even) => {
                onPageChanged(page);
              }}
            >
              {page + ' '}
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

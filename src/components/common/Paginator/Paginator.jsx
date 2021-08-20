import styles from './Paginator.module.css';

let Paginator = ({
  currentPage,
  totalUsersCount,
  pageSize,
  onPageChanged,
  ...props
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages.map((page) => {
        return (
          <span
            onClick={() => {
              onPageChanged(page);
            }}
            className={
              currentPage === page
                ? styles.selectedPage
                : styles.paginationNumber
            }
          >
            {page + ' '}
          </span>
        );
      })}
    </div>
  );
};

export default Paginator;

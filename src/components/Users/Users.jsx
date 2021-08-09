import styles from './users.module.css';
import userPhoto from '../../images/avatar-anonymous-face.png';
import { NavLink } from 'react-router-dom';

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.map((page) => {
          return (
            <span
              onClick={() => {
                props.onPageChanged(page);
              }}
              className={
                props.currentPage === page
                  ? styles.selectedPage
                  : styles.paginationNumber
              }
            >
              {page + ' '}
            </span>
          );
        })}
      </div>

      {props.users.map((user) => (
        <div key={user.id}>
          <span>
            <div>
              <NavLink to={'/profile/' + user.id}>
                <img
                  src={
                    user.photos.small != null ? user.photos.small : userPhoto
                  }
                  className={styles.userPhoto}
                  alt="avatar"
                />
              </NavLink>
            </div>
            <div>
              {user.followed ? (
                <button
                  disabled={props.followingInProgress.some(
                    (id) => id === user.id
                  )}
                  onClick={() => {
                    props.unfollow(user.id);
                  }}
                >
                  UNFOLLOW
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some(
                    (id) => id === user.id
                  )}
                  onClick={() => {
                    props.follow(user.id);
                  }}
                >
                  FOLLOW
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>"user.location.city"</div>
              <div>"user.location.country"</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;

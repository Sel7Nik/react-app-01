// import axios from 'axios';
import css from './users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/unnamed.jpg';

let Users = (props) => {
  if (props.users.length === 0) {
    const response = axios.get(
      'https://social-network.samuraijs.com/api/1.0/users'
    );

    response.then((response) => {
      debugger;
      props.setUsers(response.data.items);
    });
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img
                src={u.photos.small != null ? u.photos.small : userPhoto}
                alt="logo"
                className={css.userPhoto}
              />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  UNFOLLOW
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  FOLLOW
                </button>
              )}
            </div>
          </span>

          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{'u.location.city'}</div>
              <div>{'u.location.country'}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;

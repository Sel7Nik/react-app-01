import css from './users.module.css';

let Users = (props) => {
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} alt="logo" className={css.userPhoto} />
            </div>
            <div>
              {u.folloved ? <button>UNFOLLOW</button> : <button>FOLLOW</button>}
            </div>
          </span>

          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.city}</div>
              <div>{u.location.country}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;

import css from './users.module.css';

let Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl: 'https://cs6.pikabu.ru/avatars/237/v237661.jpg',
        followed: true,
        fullName: 'DmitryHi',
        status: 'I am boss',
        location: { city: 'Minsk', country: 'Belarus' },
      },
      {
        id: 2,
        photoUrl: 'https://cs6.pikabu.ru/avatars/237/v237661.jpg',
        followed: false,
        fullName: 'Nikolay',
        status: 'I am boss',
        location: { city: 'Kiev', country: 'Ukraina' },
      },
      {
        id: 3,
        photoUrl: 'https://cs6.pikabu.ru/avatars/237/v237661.jpg',
        followed: false,
        fullName: 'Sergei',
        status: 'I am boss',
        location: { city: 'Moscow', country: 'Russia' },
      },
      {
        id: 4,
        photoUrl: 'https://cs6.pikabu.ru/avatars/237/v237661.jpg',
        followed: true,
        fullName: 'Pavel',
        status: 'I am boss',
        location: { city: 'Paris', country: 'Franch' },
      },
    ]);
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} alt="logo" className={css.userPhoto} />
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

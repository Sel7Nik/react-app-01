import styles from './users.module.css';

let Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          'https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1Rk_21ZlSXUHM6T4sogJpp3vqaKTM5SRkZCeTgDn6uOyic',
        followed: false,
        fullName: 'Dmitry',
        status: 'I am a boss',
        location: { city: 'Minsk', country: 'Belarus' },
      },
      {
        id: 2,
        photoUrl:
          'https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1Rk_21ZlSXUHM6T4sogJpp3vqaKTM5SRkZCeTgDn6uOyic',
        followed: false,
        fullName: 'Alex',
        status: 'I am a Big boss',
        location: { city: 'London', country: 'GB' },
      },
      {
        id: 3,
        photoUrl:
          'https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1Rk_21ZlSXUHM6T4sogJpp3vqaKTM5SRkZCeTgDn6uOyic',
        followed: true,
        fullName: 'Nik Name',
        status: 'I am a King',
        location: { city: 'Moscow', country: 'Russia' },
      },
      {
        id: 4,
        photoUrl:
          'https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1Rk_21ZlSXUHM6T4sogJpp3vqaKTM5SRkZCeTgDn6uOyic',
        followed: false,
        fullName: 'Sem Sim',
        status: 'I am a monstro',
        location: { city: 'Kiev', country: 'Ukraina' },
      },
    ]);
  }

  return (
    <>
      {props.users.map((user) => (
        <div key={user.id}>
          <span>
            <div>
              <img
                src={user.photoUrl}
                className={styles.userPhoto}
                alt="avatar"
              />
            </div>
            <div>
              {user.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(user.id);
                  }}
                >
                  UNFOLLOW
                </button>
              ) : (
                <button
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
              <div>{user.fullName}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{user.location.city}</div>
              <div>{user.location.country}</div>
            </span>
          </span>
        </div>
      ))}
    </>
  );
};

export default Users;

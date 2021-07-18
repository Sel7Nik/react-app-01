import React from 'react';
import * as axios from 'axios';
import styles from './users.module.css';
import userPhoto from '../../images/avatar-anonymous-face.png';

class Users extends React.Component {
  constructor(props) {
    super(props);
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return (
      <>
        <button onClick={this.getUsers}>GET USERS</button>
        {this.props.users.map((user) => (
          <div key={user.id}>
            <span>
              <div>
                <img
                  src={
                    user.photos.small != null ? user.photos.small : userPhoto
                  }
                  className={styles.userPhoto}
                  alt="avatar"
                />
              </div>
              <div>
                {user.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(user.id);
                    }}
                  >
                    UNFOLLOW
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(user.id);
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
      </>
    );
  }
}

export default Users;

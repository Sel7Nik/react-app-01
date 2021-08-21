import Paginator from '../common/Paginator/Paginator';
import User from './User';

let Users = ({
  currentPage,
  totalItemsCount,
  pageSize,
  onPageChanged,
  users,
  portionSize,
  ...props
}) => {
  return (
    <div>
      <Paginator
        currentPage={currentPage}
        totalItemsCount={totalItemsCount}
        pageSize={pageSize}
        onPageChanged={onPageChanged}
        portionSize={portionSize}
      />{' '}
      <div>
        {users.map((user) => (
          <User
            key={user.id}
            user={user}
            followingInProgress={props.followingInProgress}
            unfollow={props.unfollow}
            follow={props.follow}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;

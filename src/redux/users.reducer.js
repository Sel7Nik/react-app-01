const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
let initialState = {
  users: [
    {
      id: 1,
      photoUrl: 'https://cs6.pikabu.ru/avatars/237/v237661.jpg',
      folloved: true,
      fullName: 'DmitryHi',
      status: 'I am boss',
      location: { city: 'Minsk', country: 'Belarus' },
    },
    {
      id: 2,
      photoUrl: 'https://cs6.pikabu.ru/avatars/237/v237661.jpg',
      folloved: false,
      fullName: 'Nikolay',
      status: 'I am boss',
      location: { city: 'Kiev', country: 'Ukraina' },
    },
    {
      id: 3,
      photoUrl: 'https://cs6.pikabu.ru/avatars/237/v237661.jpg',
      folloved: false,
      fullName: 'Sergei',
      status: 'I am boss',
      location: { city: 'Moscow', country: 'Russia' },
    },
    {
      id: 4,
      photoUrl: 'https://cs6.pikabu.ru/avatars/237/v237661.jpg',
      folloved: true,
      fullName: 'Pavel',
      status: 'I am boss',
      location: { city: 'Paris', country: 'Franch' },
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] };
    }

    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });

export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;

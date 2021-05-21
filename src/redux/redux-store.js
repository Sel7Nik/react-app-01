import { combineReducers, createStore } from 'redux';
import dialogsReducer from './dialogs.reduser';
import profileReducer from './profile.reduser';
import sidebarReducer from './sidebar.reduser';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebarPage: sidebarReducer,
});

let store = createStore(reducers);

export default store;

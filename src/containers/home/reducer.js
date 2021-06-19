//reducer.js - all the state related logic goes here to separate it out from UI and business logic.
import {
  FETCH_SONGS,
  FETCH_SONGS_SUCCEEDED,
  FETCH_SONGS_FAILED,
  RESET,
} from './actions';

const initialState = {
  isLoading: false,
  isRefreshing: false,
  list: [],
};

export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SONGS:
      return {
        ...state,
        isLoading: !state.list.length,
        isRefreshing: state.list.length,
      };
    case FETCH_SONGS_SUCCEEDED:
      return {
        ...state,
        list: action.payload.data,
        isLoading: false,
        isRefreshing: false,
      };
    case FETCH_SONGS_FAILED:
      return {
        ...state,
        isLoading: false,
        isRefreshing: false,
      };
    case RESET:
      return (state = initialState);
    default:
      return state;
  }
}

//Getter methods to get the current state of the variable inside UI
export function getIsLoading(state) {
  return state.homeReducer.isLoading;
}

export function getList(state) {
  return state.homeReducer.list;
}

export function getIsRefreshing(state) {
  return state.homeReducer.isRefreshing;
}

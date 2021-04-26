import React, { createContext, useReducer, useContext } from "react";

import {
  SET_CURRENT_POST,
  ADD_POST,
  ADD_USER,
  SET_CURRENT_USER,
  LOADING
} from "./actions";


const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case SET_CURRENT_POST:
      return {
        ...state,
        currentPost: action.post,
        loading: false,
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.user,
        loading: false
      };
    case ADD_POST:
      return {
        ...state,

        post: [action.post, ...state.posts],
        loading: false
      };
    case ADD_USER:
      return {
        ...state,
        users: [action.user, ...state.users],
        loading: false

      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case ADD_USER:
      return {
        ...state,
        users: [action.user, ...state.users],
        loading: false,
      };
    default:
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    posts: [],
    users: [],
    currentUser: {
      id: 0,
      username: "",
      password: ""
    },
    loading: false
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

<<<<<<< HEAD
export { StoreProvider, useStoreContext }

export const AppContext = createContext(true);

export function useAppContext() {
  return useContext(AppContext);
}
=======
export { StoreProvider, useStoreContext };
>>>>>>> main

import React, { createContext, useReducer, useContext } from "react";
import { SET_CURRENT_POST, ADD_POST, LOADING, ADD_USER } from "./actions";

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
    case ADD_POST:
      return {
        ...state,
        posts: [action.post, ...state.posts],
        loading: false,
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
    loading: false,
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };

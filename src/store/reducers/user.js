const INITIAL_STATE = {
  token: null,
  info: [],
  favoriteUsers: [],
  favoriteRepositories: []
};

function user(state = INITIAL_STATE, action) {
  console.log(action);
  switch (action.type) {
    case "UPDATE_TOKEN":
      return { ...state, token: action.token };
    case "AUTH_LOGIN":
      return { ...state, info: action.info };
    case "UPDATE_FAVORITE_USERS":
      return {
        ...state,
        favoriteUsers: [...state.favoriteUsers, action.user]
      };
    case "UPDATE_FAVORITE_REPOS":
      return {
        ...state,
        favoriteRepositories: [...state.favoriteRepositories, action.repo]
      };
    case "AUTH_LOGOUT":
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default user;

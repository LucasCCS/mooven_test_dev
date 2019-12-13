const INITIAL_STATE = {
  token: null,
  info: []
};

function user(state = INITIAL_STATE, action) {
  console.log(action);
  switch (action.type) {
    case "UPDATE_TOKEN":
      return { ...state, token: action.token};
    case "AUTH_LOGIN":
      return { ...state, info: action.info };
    case "AUTH_LOGOUT":
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default user;

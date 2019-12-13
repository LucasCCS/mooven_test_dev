const INITIAL_STATE = {
  token: null,
  info: []
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "AUTH_LOGIN":
      return { ...state };
    case "AUTH_LOGOUT":
      return [];
    default:
      return state;
  }
}

export default user;

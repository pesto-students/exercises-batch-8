import { COMMIT_REPOS } from "../constants";

const initialState = {
  username: "",
  repos: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case COMMIT_REPOS:
      return {
        ...state,
        username: payload.username,
        repos: payload.repos
      };

    default:
      return state;
  }
};

export const repoReducer = (state = [], action) => {
  if (action.type === 'FETCH_REPOS') {
    return action.payload;
  }
  return state;
};

export const loadingReducer = (state = {}, action) => {
  if (action.type === 'LOADING') {
    return { ...state, loading: true }
  }
  if (action.type === 'SUCCESS') {
    return { ...state, loading: false }
  }
  return state;
};
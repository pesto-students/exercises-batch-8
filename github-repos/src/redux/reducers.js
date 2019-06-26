import { SAVE_GITHUB_REPOS } from './constants';

const githubFormReducer = (state = { username: '', repos: [] }, action) => {
    if (action.type === SAVE_GITHUB_REPOS) {
        console.log('action', action);
        const { username, repos } = action.payload;
        return {
            ...state,
            username,
            repos,
        };
    }
    return state;
};

export default githubFormReducer;
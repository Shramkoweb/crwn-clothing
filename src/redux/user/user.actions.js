export const ACTION_TYPE = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
};

export const setCurrentUser = (user) => ({
  type: ACTION_TYPE.SET_CURRENT_USER,
  payload: user,
});

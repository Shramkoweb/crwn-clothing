export const ActionType = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
};

export const setCurrentUser = (user) => ({
  type: ActionType.SET_CURRENT_USER,
  payload: user,
});

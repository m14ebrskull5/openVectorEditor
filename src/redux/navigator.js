const navigatorState = (
  state = {
    list: [],
    loading: true,
    focus: -1
  },
  action
) => {
  switch (action.type) {
    case "navigator/list":
      return { ...state, list: action.payload, loading: false };
    case "navigator/focus":
      return { ...state, focus: action.payload };
    default:
      return state;
  }
};
export default navigatorState;

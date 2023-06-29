const navigatorState = (
  state = {
    list: [],
    loading: true
  },
  action
) => {
  switch (action.type) {
    case "navigator/list":
      return { list: action.payload, loading: false };
    default:
      return state;
  }
};
export default navigatorState;

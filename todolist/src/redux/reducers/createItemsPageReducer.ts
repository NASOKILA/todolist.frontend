export default (state = {}, action: any) => {
  switch (action.type) {
    case "CREATE_PAGE_PAGE_ACTION":
      return {
        result: action.payload
      };
    default:
      return state;
  }
};

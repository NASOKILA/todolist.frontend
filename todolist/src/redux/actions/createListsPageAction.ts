export const createListsPageAction = (lists: any) => (dispatch: any) => {
  dispatch({
    type: "CREATE_LISTS_PAGE_ACTION",
    payload: lists
  });
};

export const createListsPageAction = (lists: any) => (dispatch: any) => {
  dispatch({
    type: "CREATE_ITEMS_PAGE_ACTION",
    payload: lists
  });
};

export type LoginPropsType = {
  history: any;
  children: any;
};

export type LoginStateType = {
  email: string;
  password: string;
  errorMessages: Array<string>;
  history: any;
  children: any;
};

export type LoginCredentialsType = {
  email: string;
  password: string;
};

export type CreateListsPropsType = {
  history: any;
  children: any;
  setCreateListsPageState: any;
  createListsPageReducer: any;
};

export type CreateListsStateType = {
  form: {
    title: string;
  };
  showErrorModal: Boolean;
};

export type MainPropsType = {
  history: any;
};

export type NotFoundPropsType = {
  history: any;
};

export type OfficialPropsType = {
  history: any;
  children: any;
};

export type RegisterPropsType = {
  history: any;
  children: any;
};

export type RegisterStateType = {
  form: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    isAdmin: Boolean;
  };
  errorMessages: Array<string>;
  showErrorModal: Boolean;
};

export type RegisterCredentialsType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isAdmin: Boolean;
};

export type AuthDataType = {
  token: string;
  tokenExpirationTime: string;
  uniqueToken: string;
};

export type UserDetailsAuthDataType = {
  userData: UserDataType;
  authData: AuthDataType;
};

export type UserDataType = {
  email: string;
  lists: [];
  isAdmin: boolean;
};

export type UserType = {
  id: number;
  uniqueToken: string;
  firstName: string;
  lastName: string;
  email: string;
  isAdmin: boolean;
  lists: [];
};

export type ErrorBoundaryStateType = {
  hasError: Boolean;
};

export type TodoListType = {
  id: number;
  title: string;
  userId: number;
  items: TodoItemsType[];
};

export type TodoListPropertiesType = {
  title: string;
};

export type TodoItemPropertiesType = {
  description: string;
  isShared: Boolean;
  isDone: Boolean;
};

export type TodoItemsType = {
  id: number;
  description: string;
  isDone: Boolean;
  listId: number;
  isShared: Boolean;
};

export type UserEditType = {
  firstName: string;
  lastName: string;
  email: string;
};

export type CreateItemsStateType = {
  form: {
    description: string;
    isNew: Boolean;
    isShared: Boolean;
    listId: number;
  };

  showErrorModal: Boolean;
};

export type CreateItemsType = {
  description: string;
  isNew: Boolean;
  isShared: Boolean;
  listId: number;
};

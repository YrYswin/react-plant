export interface profileState {
  status: Status;
  data: profileDataState | null;
  tokens: tokensState | null,
  error: string;
};

export type profileDataState = {
  id: number,
  name: string,
  email: string,
  password: string,
  avatar: string,
  role: string,
  creationAt: string,
  updatedAt: string,
  firstName: string,
  lastName: string,
};

export type tokensState = {
  access_token: string;
  refresh_token: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}

export type userRegisterState = {
  name: string;
  email: string;
  password: string;
  passwordConf: string;
  avatar: string;
};

export type userLoginState = {
  email: string;
  password: string;
}
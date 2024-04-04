export interface userSliceState {
  data: userDataState | null,
  status: Status,
  error: string | null,
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}

export type userDataState = {
  id: number,
  name: string,
  email: string,
  password: string,
  avatar: string,
  role: string
}
declare module 'MyModels' {
  export interface User {
    access_token: string;
    refresh_token: string;
  }

  export type AuthState = {
    isLoggedIn: boolean;
    user: User;
    error: string;
  };

  export type UserCredentials = {
    email: string;
    password: string;
  };

  export type UserRegister = {
    name: string;
    email: string;
    password: string;
    passwordConf: string;
    avatar: string;
  };
}

declare module "*svg" {
  const content: any;
  export default content
}
declare module "*png" {
  const content: any;
  export default content
}
declare module "*jpg" {
  const content: any;
  export default content
}
declare module "*css" {
  const content: any;
  export default content
}
declare module "*scss" {
  const content: any;
  export default content
}
declare module "*react-loadable" {
  const content: any;
  export default content
}
declare module "lodash.debounce" {
  const content: any;
  export default content
}

declare module "react-slick" {
  const content: any;
  export default content
}

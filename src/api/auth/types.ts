export interface ISignUpParams {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface ISignInParams {
  email: string;
  password: string;
}

export interface ISignUpResponse {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
export interface IVerifyEmailParams {
  email: string;
  token: string;
}

export interface IUser {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
}

import axios from 'api/axios';
import { ISignInParams, ISignUpParams, IUser } from './types';

export const signUpRequest = async (params: ISignUpParams) => {
  return await axios({
    url: '/auth/sign_up',
    method: 'POST',
    data: params,
  });
};

export const signInRequest = async (params: ISignInParams) => {
  return await axios({
    url: '/auth/sign_in',
    method: 'POST',
    data: params,
  });
};

export const logoutRequest = async () => {
  return await axios({
    url: '/auth/log_out',
    method: 'POST',
  });
};

export const getUserByIdRequest = async (userId: string): Promise<IUser> => {
  const { data } = await axios({
    url: `/user/get_by_id/${userId}`,
    method: 'GET',
  });
  return data;
};

import { useQuery, UseQueryOptions } from 'react-query';
import { getUserByIdRequest } from './request';
import { IUser } from './types';

export const useUserById = (userId: string, option?: UseQueryOptions<IUser, Error>) => {
  return useQuery<IUser, Error>(['user', userId], () => getUserByIdRequest(userId), option);
};

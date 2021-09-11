import { useQuery, UseQueryOptions } from 'react-query';
import { getGasPricesRequest } from './request';
import { IGasPrices } from './types';

export const useGasprice = (network: string, option?: UseQueryOptions<IGasPrices, Error>) => {
  return useQuery<IGasPrices, Error>('gasPrices', () => getGasPricesRequest(network), option);
};

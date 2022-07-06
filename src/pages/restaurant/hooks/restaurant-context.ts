import { createContext, useContext } from 'react';
import { Restaurant } from 'types';

export const RestaurantContext = createContext({} as Restaurant);
export const useRestaurantCtx = () => useContext(RestaurantContext);

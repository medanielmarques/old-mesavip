import { createContext } from 'react';
import { Restaurant } from 'src/interfaces/restaurant';

export const RestaurantCardContext = createContext({} as Restaurant);

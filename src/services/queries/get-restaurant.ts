import { api } from 'services/api';
import { Restaurant } from 'types';

export const getRestaurant = async (id: string) => {
  const { data: restaurant } = await api.get<Restaurant>(
    `restaurants/list-by-id/${id}`
  );

  const banner_url = (await api
    .get(`files/list/${id}/banner`)
    .then((res) => res.data[0].path)) as string;

  return { restaurant, banner_url };
};

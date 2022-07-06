import { api } from 'services/api';

export const getRestaurant = async (id: string) => {
  const { data: restaurant } = await api.get(`restaurants/list-by-id/${id}`);

  const banner_url = await api
    .get(`files/list/${id}/banner`)
    .then((res) => res.data[0].path);

  return { restaurant, banner_url };
};

import { useQuery } from 'react-query';
import { api } from 'services/api';
import { Rating } from 'types';
import { useReservationCardCtx } from '../components/reservation-card';

export async function getRating(id: string) {
  const { data } = await api.get<Rating>(`ratings/list-by-id/${id}`);
  return data;
}

export function useRating() {
  const { id } = useReservationCardCtx();

  const { data: rating } = useQuery(
    `list-rating-by-id - ${id}`,
    () => getRating(id),
    {
      staleTime: 1000 * 60 * 24, // 24 hours
    }
  );
  return { rating };
}

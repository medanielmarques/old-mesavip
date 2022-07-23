import { useQuery, UseQueryOptions } from 'react-query';
import { getReservations } from 'services/queries/get-reservations';
import { Reservation } from 'types';

export type ReservationType = 'past' | 'following';

interface UseReservationsProps {
  type: ReservationType;
  options?: UseQueryOptions<Reservation[]>;
}

export function useReservations({ type, options }: UseReservationsProps) {
  return useQuery<Reservation[]>(
    `${type}-reservations`,
    () => getReservations(type),
    options
  );
}

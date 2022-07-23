import { GetServerSidePropsContext } from 'next';
import { parseCookies } from 'nookies';

import { ReservationType } from 'pages/reservations/hooks/use-reservations';
import { api } from 'services/api';
import { Reservation } from 'types';

interface GetReservationsSSR {
  ctx: GetServerSidePropsContext;
  type: ReservationType;
}

export async function getReservations(type: ReservationType) {
  return api
    .get<Reservation[]>(`reservations/list-${type}`)
    .then((res) => res.data);
}

export async function getReservationsSSR({ type, ctx }: GetReservationsSSR) {
  const cookies = parseCookies(ctx);

  return api
    .get<Reservation[]>(`reservations/list-${type}`, {
      headers: { Authorization: `Bearer ${cookies['mesavip.token']}` },
    })
    .then((res) => res.data);
}

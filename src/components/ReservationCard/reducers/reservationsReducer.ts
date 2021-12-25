import { getPastReservations } from 'src/http/reservation';
import { Reservation } from 'src/interfaces/reservation';

interface actionTypes {
  type: 'getPast';
}

export function reservationsReducer(state: any, action: actionTypes) {
  switch (action.type) {
    case 'getPast':
      return { state: getPastReservations() };
    default:
      'oi';
  }
}

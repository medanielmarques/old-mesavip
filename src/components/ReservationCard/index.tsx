import { Box, Flex, Divider, useDisclosure } from '@chakra-ui/react';

import { Address } from './Address';
import { ScheduledDate } from './ScheduledDate';
import { ScheduledTime } from './ScheduledTime';
import { RestaurantNameAndRate } from './RestaurantNameAndRate';
import { RateReservationModal } from './RateReservationModal';
import { PastReservationButton } from './PastReservationButton';
import { FollowingReservationButton } from './FollowingReservationButton';
import { SeeRatingModal } from './SeeRatingModal';
import { CancelReservationAlert } from './CancelReservationAlert';

import { ReservationCardContext } from './contexts/ReservationCardContext';
import { Reservation } from 'src/interfaces/reservation';

interface CardProps {
  reservation: Reservation;
}

export function ReservationCard(props: CardProps) {
  const { reservation } = props;

  const { isOpen, onToggle } = useDisclosure();
  const { isOpen: isOpenSeeRatingModal, onToggle: onToggleSeeRatingModal } =
    useDisclosure();

  const {
    isOpen: isOpenCancelReservationAlert,
    onToggle: onToggleCancelReservationAlert,
  } = useDisclosure();

  return (
    <ReservationCardContext.Provider
      value={{
        reservation,
        isOpen,
        onToggle,
        isOpenSeeRatingModal,
        onToggleSeeRatingModal,
        cancelReservationAlertProps: {
          isOpen: isOpenCancelReservationAlert,
          onToggle: onToggleCancelReservationAlert,
        },
      }}
    >
      <Box w='92' h='52' p='4' borderRadius='md' shadow='base'>
        <Flex w='68' h='32' ml='5px' m='0 auto' gridGap='3'>
          <ScheduledDate />

          <Flex width='100%' direction='column'>
            <RestaurantNameAndRate />
            <ScheduledTime />
            <Address />
          </Flex>
        </Flex>

        <Divider />

        {/* Verify if the [rated] key exists in the reservation object */}
        {Reflect.has(reservation, 'rated') ? (
          <PastReservationButton />
        ) : (
          <FollowingReservationButton />
        )}

        <RateReservationModal />
        <SeeRatingModal />
        {/* <CancelReservationAlert /> */}
      </Box>
    </ReservationCardContext.Provider>
  );
}

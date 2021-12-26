import { Box, Flex, Divider, useDisclosure } from '@chakra-ui/react';

import { Address } from './Address';
import { ScheduledDate } from './ScheduledDate';
import { ScheduledTime } from './ScheduledTime';
import { RestaurantNameAndRate } from './RestaurantNameAndRate';
import { RateReservationModal } from './RateReservationModal';
import { PastReservationButton } from './PastReservationButton';
import { FollowingReservationButton } from './FollowingReservationButton';
import { SeeRatingModal } from './SeeRatingModal';

import { ReservationCardContext } from './contexts/ReservationCardContext';
import { Reservation } from 'src/interfaces/reservation';

interface CardProps {
  reservation: Reservation;
  past?: boolean;
}

export function ReservationCard(props: CardProps) {
  const { past, reservation } = props;

  const { isOpen, onToggle } = useDisclosure();
  const { isOpen: isOpenSeeRatingModal, onToggle: onToggleSeeRatingModal } =
    useDisclosure();

  return (
    <ReservationCardContext.Provider
      value={{
        reservation,
        isOpen,
        onToggle,
        isOpenSeeRatingModal,
        onToggleSeeRatingModal,
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

        {!!past ? <PastReservationButton /> : <FollowingReservationButton />}

        <RateReservationModal />
        <SeeRatingModal />
      </Box>
    </ReservationCardContext.Provider>
  );
}

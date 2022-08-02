import { Box, Flex, Heading, Link, Stack, Text } from '@chakra-ui/react';
import { BsClock } from 'react-icons/bs';
import { FaLink, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

import { Divider } from 'core/divider';
import { useRestaurantCtx } from 'pages/restaurant/[id].page';

export function AboutTab() {
  const { name } = useRestaurantCtx();

  return (
    <Box display='flex' flexDirection='column' alignContent='center' mt='3'>
      <Heading fontSize='2xl' fontWeight='500'>
        About {name}
      </Heading>

      <Flex
        gridGap={{ base: '8', lg: '16' }}
        direction={{ base: 'column', lg: 'row' }}
        mt='12'
      >
        <Contact />

        <Divider />

        <Schedule />
      </Flex>
    </Box>
  );
}

function Contact() {
  const { name, site, phone, address } = useRestaurantCtx();

  return (
    <Stack spacing='6' my='auto' textDecoration='underline'>
      <Flex gridGap='4' align='center'>
        <FaLink color='#949494' />
        <Link href={site} target='_blank'>
          Website
        </Link>
      </Flex>

      <Flex gridGap='4' align='center'>
        <FaPhone color='#949494' />
        <Text>{phone}</Text>
      </Flex>

      <Flex gridGap='4'>
        <FaMapMarkerAlt color='#949494' />
        <Flex direction='column'>
          <Text>{name}</Text>
          <Text>{`${address?.logradouro}, ${address?.cidade}`}</Text>
        </Flex>
      </Flex>
    </Stack>
  );
}

interface ISchedule {
  week_day: string;
  active_hours?: string;
}

export function Schedule() {
  const schedule: ISchedule[] = [
    { week_day: 'Monday', active_hours: '5:30 pm - 9:00 pm' },
    { week_day: 'Tuesday', active_hours: '5:30 pm - 9:00 pm' },
    { week_day: 'Wednesday', active_hours: '5:30 pm - 9:00 pm' },
    { week_day: 'Thursday', active_hours: '5:30 pm - 9:00 pm' },
    { week_day: 'Friday', active_hours: '5:30 pm - 9:00 pm' },
    { week_day: 'Saturday', active_hours: '5:30 pm - 9:00 pm' },
    { week_day: 'Sunday' },
  ];

  return (
    <Box fontSize='14px' maxW={290}>
      <Flex gridGap='3' align='center' mb='3'>
        <BsClock color='#9ca1a9' size='24px' />
        <Text color='red.400' fontWeight='bold'>
          Open Now
        </Text>
      </Flex>

      <Stack ml='9'>
        {schedule.map((day) => (
          <WeekDaySchedule key={day.week_day} day={day} />
        ))}
      </Stack>
    </Box>
  );
}

function WeekDaySchedule({
  day: { week_day, active_hours },
}: {
  day: ISchedule;
}) {
  return (
    <Flex
      gridGap={{ base: '6', lg: '16' }}
      justify='space-between'
      color='gray.500'
    >
      <Text>{week_day}</Text>
      <Text>{active_hours ? active_hours : 'Closed'}</Text>
    </Flex>
  );
}

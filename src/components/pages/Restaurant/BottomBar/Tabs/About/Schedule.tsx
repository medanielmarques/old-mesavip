import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import { BsClock } from 'react-icons/bs';
import { WeekDaySchedule } from './WeekDaySchedule';

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
        {schedule.map((day, index) => (
          <WeekDaySchedule
            key={index}
            week_day={day.week_day}
            active_hours={day.active_hours}
          />
        ))}
      </Stack>
    </Box>
  );
}

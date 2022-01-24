import { Flex, Text } from '@chakra-ui/react';

interface WeekDayScheduleProps {
  week_day: string;
  active_hours?: string;
}

export function WeekDaySchedule(props: WeekDayScheduleProps) {
  const { week_day, active_hours } = props;

  return (
    <Flex gridGap='16' justify='space-between' color='gray.500'>
      <Text>{week_day}</Text>
      <Text>{active_hours ? active_hours : 'Closed'}</Text>
    </Flex>
  );
}

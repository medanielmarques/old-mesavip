import { useContext } from 'react';
import { Flex, Link, Stack, Text } from '@chakra-ui/react';
import { FaLink, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { RestaurantContext } from 'pages/restaurant/[id]';

export function Info() {
  const {
    name,
    site,
    phone,
    address: { logradouro, cidade },
  } = useContext(RestaurantContext);

  return (
    <Stack spacing='6' textDecoration='underline'>
      <Flex gap='4' align='center'>
        <FaLink />
        <Link href={site} target='_blank'>
          Website
        </Link>
      </Flex>

      <Flex gap='4' align='center'>
        <FaPhone />
        <Text>{phone}</Text>
      </Flex>

      <Flex gap='4'>
        <FaMapMarkerAlt />
        <Flex direction='column'>
          <Text>{name}</Text>
          <Text>{`${logradouro}, ${cidade}`}</Text>
        </Flex>
      </Flex>
    </Stack>
  );
}

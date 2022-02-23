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
          <Text>{`${logradouro}, ${cidade}`}</Text>
        </Flex>
      </Flex>
    </Stack>
  );
}

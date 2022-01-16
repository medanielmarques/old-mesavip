import { Flex, Stack, Text } from '@chakra-ui/react';
import { RestaurantContext } from 'pages/restaurant/[id]';
import { useContext } from 'react';
import { FaLink, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export function Info() {
  const { site, phone, address } = useContext(RestaurantContext);

  console.log(address);

  return (
    <Stack>
      <Flex>
        <FaLink />
        <Text>{site}</Text>
      </Flex>

      <Flex>
        <FaPhone />
        <Text>{phone}</Text>
      </Flex>

      <Flex>
        <FaMapMarkerAlt />
        {/* <Text>{address}</Text> */}
      </Flex>
    </Stack>
  );
}

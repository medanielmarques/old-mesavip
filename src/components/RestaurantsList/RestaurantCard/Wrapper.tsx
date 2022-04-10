import Link from 'next/link';
import { useContext } from 'react';
import { LinkProps, Link as ChakraLink, Flex } from '@chakra-ui/react';
import { RestaurantCardContext } from '.';

export function Wrapper({ children }: LinkProps) {
  const { id } = useContext(RestaurantCardContext);

  return (
    <Link href={`/restaurant/${id}`} passHref>
      <ChakraLink _hover={{ outline: 'none' }}>
        <Flex
          bg='white'
          borderRadius='lg'
          shadow={{ base: 'none', md: 'base' }}
          _hover={{ shadow: { base: 'none', md: 'md' } }}
          role='restaurant-card'
        >
          {children}
        </Flex>
      </ChakraLink>
    </Link>
  );
}

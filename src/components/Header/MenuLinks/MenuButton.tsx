import { ReactNode, useContext } from 'react';
import Link from 'next/link';
import { Flex, Text, Link as ChakraLink } from '@chakra-ui/react';

import { HeaderContext } from '..';

interface MenuButtonProps {
  children: ReactNode;
  href: string;
  onClick?(): void;
}

export function MenuButton({ children, href, onClick }: MenuButtonProps) {
  const { toggle } = useContext(HeaderContext);

  return (
    <Link href={href} passHref>
      <ChakraLink _hover={{ outline: 'none' }} onClick={toggle}>
        <Flex
          alignItems='center'
          w='32'
          h='12'
          onClick={onClick}
          bg={{ base: '', md: 'gray.100' }}
          _hover={{ bg: { base: '', md: 'gray.200' } }}
          textAlign='center'
          rounded='md'
        >
          <Text
            fontWeight='500'
            _hover={{ textDecor: { base: 'underline', md: 'unset' } }}
            mx='auto'
          >
            {children}
          </Text>
        </Flex>
      </ChakraLink>
    </Link>
  );
}

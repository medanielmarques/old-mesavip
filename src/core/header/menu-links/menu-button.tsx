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
          color='gray.500'
          _hover={{ bg: { base: '', md: 'gray.100' } }}
          textAlign='center'
          rounded='lg'
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

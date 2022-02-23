import { ReactNode } from 'react';
import Link from 'next/link';
import { Flex, Text, Link as ChakraLink } from '@chakra-ui/react';

interface MenuButtonProps {
  children: ReactNode;
  href: string;
  onClick?(): void;
}

export function MenuButton({ children, href, onClick }: MenuButtonProps) {
  return (
    <Link href={href} passHref>
      <ChakraLink _hover={{ outline: 'none' }}>
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

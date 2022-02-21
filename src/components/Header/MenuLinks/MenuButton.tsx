import { ReactNode } from 'react';
import Link from 'next/link';
import { Flex, Text } from '@chakra-ui/react';

interface MenuButtonProps {
  children: ReactNode;
  href: string;
  onClick?(): void;
}

export function MenuButton({ children, href, onClick }: MenuButtonProps) {
  return (
    <Link href={href} passHref>
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
          cursor='pointer'
          _hover={{ textDecor: { base: 'underline', md: 'unset' } }}
          mx='auto'
        >
          {children}
        </Text>
      </Flex>
    </Link>
  );
}

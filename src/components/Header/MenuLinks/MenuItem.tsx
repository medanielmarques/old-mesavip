import { ReactNode } from 'react';
import Link from 'next/link';
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react';

interface MenuItemProps extends LinkProps {
  children: ReactNode;
  href: string;
}

export function MenuItem({ children, href, ...rest }: MenuItemProps) {
  return (
    <Link href={href} passHref>
      <ChakraLink _focus={{ outline: 'none' }} {...rest}>
        {children}
      </ChakraLink>
    </Link>
  );
}

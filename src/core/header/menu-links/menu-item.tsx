import { ReactNode, useContext } from 'react';
import Link from 'next/link';
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react';

import { HeaderContext } from '..';

interface MenuItemProps extends LinkProps {
  children: ReactNode;
  href: string;
}

export function MenuItem({ children, href, ...rest }: MenuItemProps) {
  const { toggle } = useContext(HeaderContext);

  return (
    <Link href={href} passHref>
      <ChakraLink _focus={{ outline: 'none' }} onClick={toggle} {...rest}>
        {children}
      </ChakraLink>
    </Link>
  );
}

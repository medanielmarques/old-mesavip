import { ReactNode } from 'react';
import Link from 'next/link';
import { Button, useBreakpointValue } from '@chakra-ui/react';

interface MenuButtonProps {
  children: ReactNode;
  href: string;
  onClick?(): void;
}

export function MenuButton({ children, href, onClick }: MenuButtonProps) {
  const buttonVariant = useBreakpointValue({ base: 'unstyled', md: 'solid' });

  return (
    <Link href={href} passHref>
      <Button
        variant={buttonVariant}
        width='120px'
        height='45px'
        onClick={onClick}
      >
        {children}
      </Button>
    </Link>
  );
}

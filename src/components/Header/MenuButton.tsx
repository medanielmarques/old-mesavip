import { ReactNode } from 'react';
import Link from 'next/link';
import { Button, useBreakpointValue } from '@chakra-ui/react';

interface MenuButtonProps {
  children: ReactNode;
  href: string;
  onClick?(): void;
}

export function MenuButton({ children, href, onClick }: MenuButtonProps) {
  const buttonVariant = useBreakpointValue({ base: 'unstyled', md: 'outline' });

  return (
    <Link href={href}>
      <Button variant={buttonVariant} onClick={onClick}>
        {children}
      </Button>
    </Link>
  );
}

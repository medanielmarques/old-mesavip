import { ReactNode } from 'react';
import { Box, Stack } from '@chakra-ui/react';

interface MenuLinksContainerProps {
  children: ReactNode;
  isOpen: boolean;
}

export function MenuLinksContainer(props: MenuLinksContainerProps) {
  const { children, isOpen } = props;

  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{
        base: '100%',
        md: 'auto',
      }}
    >
      <Stack
        spacing={{ sm: '4', md: '8' }}
        direction={{ base: 'column', md: 'row' }}
        align='center'
        justify={{ base: 'center', md: 'flex-end' }}
        pt={{ base: 4, md: 0 }}
      >
        {children}
      </Stack>
    </Box>
  );
}

import { useContext } from 'react';
import { Box } from '@chakra-ui/react';
import { FaBars, FaTimes } from 'react-icons/fa';

import { HeaderContext } from '.';

interface MenuToggleProps {
  isOpen?: boolean;
}

export function MenuToggle({ isOpen }: MenuToggleProps) {
  const { toggle } = useContext(HeaderContext);

  return (
    <Box
      display={{ base: 'block', md: 'none' }}
      onClick={toggle}
      cursor='pointer'
    >
      {isOpen ? <FaTimes /> : <FaBars />}
    </Box>
  );
}

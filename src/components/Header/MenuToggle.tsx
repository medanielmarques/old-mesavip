import { Box } from '@chakra-ui/react';
import { FaBars, FaTimes } from 'react-icons/fa';

interface MenuToggleProps {
  toggle?(): any;
  isOpen?: boolean;
}

export function MenuToggle({ toggle, isOpen }: MenuToggleProps) {
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

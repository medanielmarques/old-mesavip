import { createContext, useContext } from 'react';
import { Box, Flex, FlexProps, Image, useDisclosure } from '@chakra-ui/react';
import { FaBars, FaTimes } from 'react-icons/fa';

import { Logo, MenuLinks } from './menu-links';

interface HeaderContextData {
  toggle: () => void;
  isOpen: boolean;
}

const HeaderContext = createContext({} as HeaderContextData);
export const useHeaderCtx = () => useContext(HeaderContext);

export function Header() {
  const { isOpen, onToggle: toggle } = useDisclosure();

  return (
    <HeaderContext.Provider value={{ toggle, isOpen }}>
      <NavBarContainer>
        <Logo />

        <MenuToggle />

        <MenuLinks />
      </NavBarContainer>
    </HeaderContext.Provider>
  );
}

function NavBarContainer({ children }: FlexProps) {
  return (
    <Flex
      as='nav'
      align='center'
      justify='space-between'
      wrap='wrap'
      w='100%'
      px='3'
      bg='white'
      borderBottom='1px solid #f0f2f5'
    >
      {children}
    </Flex>
  );
}

function MenuToggle() {
  const { toggle, isOpen } = useHeaderCtx();

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

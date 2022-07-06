import { createContext, useState } from 'react';
import { Image } from '@chakra-ui/react';

import { NavBarContainer } from './nav-bar-container';
import { MenuItens, MenuItem } from './menu-links';
import { MenuToggle } from './menu-toggle';

interface HeaderContextData {
  toggle: () => void;
}

export const HeaderContext = createContext({} as HeaderContextData);

export function Header() {
  const [isOpen, isOpenSet] = useState(false);
  const logo = 'https://bit.ly/2YFsIhw';

  function toggle() {
    isOpenSet(!isOpen);
  }

  return (
    <HeaderContext.Provider value={{ toggle }}>
      <NavBarContainer>
        <MenuItem href='/'>
          <Image w='40' h='20' src={logo} alt='Mesavip logo' />
        </MenuItem>

        <MenuToggle isOpen={isOpen} />

        <MenuItens isOpen={isOpen} />
      </NavBarContainer>
    </HeaderContext.Provider>
  );
}

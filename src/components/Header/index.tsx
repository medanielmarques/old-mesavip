import { createContext, useState } from 'react';
import { Image } from '@chakra-ui/react';

import { NavBarContainer } from './NavBarContainer';
import { MenuItem } from './MenuLinks/MenuItem';
import { MenuToggle } from './MenuToggle';
import { MenuItens } from './MenuLinks';

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

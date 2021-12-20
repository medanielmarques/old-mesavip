import { useState } from 'react';
import { Image } from '@chakra-ui/react';

import { NavBarContainer } from './NavBarContainer';
import { MenuItem } from './MenuItem';
import { MenuToggle } from './MenuToggle';
import { MenuItens } from './MenuLinks';

export function Header() {
  const [isOpen, isOpenSet] = useState(false);
  const logo = 'https://bit.ly/2YFsIhw';

  function toggle() {
    isOpenSet(!isOpen);
  }

  return (
    <NavBarContainer>
      <MenuItem href='/'>
        <Image w='40' h='20' src={logo} alt='Mesavip logo' />
      </MenuItem>

      <MenuToggle toggle={toggle} isOpen={isOpen} />

      <MenuItens isOpen={isOpen} />
    </NavBarContainer>
  );
}

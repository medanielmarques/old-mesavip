import { useContext } from 'react';
import { Text } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

import { MenuLinksContainer } from './MenuLinksContainer';
import { ButtonsContainer } from './ButtonsContainer';
import { MenuItem } from './MenuItem';
import { MenuButton } from './MenuButton';

import { AuthContext } from 'contexts/AuthContext';

interface MenuItensProps {
  isOpen: boolean;
}

export function MenuItens({ isOpen }: MenuItensProps) {
  const { isAuthenticated, signOut } = useContext(AuthContext);

  const github_link = 'https://github.com/Mesavip/mesavip-web-tsc-next';

  return (
    <MenuLinksContainer isOpen={isOpen}>
      <MenuItem href={github_link} target='_blank' rel='noreferrer'>
        <FaGithub size='25' />
      </MenuItem>

      <MenuButton href='/'>Restaurants</MenuButton>

      {isAuthenticated ? (
        <ButtonsContainer>
          <MenuButton href='/reservations'>Reservations</MenuButton>
          <MenuButton href='/' onClick={signOut}>
            Sign out
          </MenuButton>
        </ButtonsContainer>
      ) : (
        <ButtonsContainer>
          <MenuButton href='/signin'>Sign in</MenuButton>
          <MenuButton href='/signup'>Sign up</MenuButton>
        </ButtonsContainer>
      )}
    </MenuLinksContainer>
  );
}

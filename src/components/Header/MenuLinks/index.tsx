import { Text } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

import { MenuItem } from './MenuItem';
import { MenuButton } from './MenuButton';
import { MenuLinksContainer } from './MenuLinksContainer';

import { isAuthenticated, signOut } from 'services/auth';
import { ButtonsContainer } from './ButtonsContainer';

interface MenuItensProps {
  isOpen: boolean;
}

export function MenuItens({ isOpen }: MenuItensProps) {
  const github_link = 'https://github.com/Mesavip/mesavip-web-tsc-next';

  function handleSignOut() {
    signOut();
  }

  return (
    <MenuLinksContainer isOpen={isOpen}>
      <MenuItem href={github_link} target='_blank' rel='noreferrer'>
        <FaGithub size='25' />
      </MenuItem>

      <MenuItem href='/'>
        <Text
          fontSize={{
            sm: 'inherit',
            md: '18px',
          }}
        >
          Restaurants
        </Text>
      </MenuItem>

      {isAuthenticated() ? (
        <ButtonsContainer>
          <MenuButton href='/reservations'>Reservations</MenuButton>
          <MenuButton href='/' onClick={handleSignOut}>
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

import { FaGithub } from 'react-icons/fa';

import { MenuLinksContainer } from './menu-links-container';
import { ButtonsContainer } from './buttons-container';
import { MenuItem } from './menu-item';
import { MenuButton } from './menu-button';
import { useAuth } from 'contexts';

interface MenuItensProps {
  isOpen: boolean;
}

export function MenuItens({ isOpen }: MenuItensProps) {
  const { isAuthenticated, signOut } = useAuth();

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

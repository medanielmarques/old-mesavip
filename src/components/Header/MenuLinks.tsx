import { Box, HStack, Stack, Text } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { isAuthenticated, signOut } from 'src/services/auth';
import { MenuButton } from './MenuButton';
import { MenuItem } from './MenuItem';

interface MenuItensProps {
  isOpen: boolean;
}

export function MenuItens({ isOpen }: MenuItensProps) {
  const github_link = 'https://github.com/Mesavip/mesavip-web-tsc-next';

  function handleSignOut() {
    signOut();
  }

  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{
        base: '100%',
        md: 'auto',
      }}
    >
      <Stack
        spacing='8'
        direction={{ base: 'column', md: 'row' }}
        align='center'
        justify={{ base: 'center', md: 'flex-end' }}
        pt={{ base: 4, md: 0 }}
      >
        <MenuItem href={github_link} target='_blank' rel='noreferrer'>
          <FaGithub size='25' />
        </MenuItem>

        <MenuItem href='/'>
          <Text fontSize='18px'>Restaurants</Text>
        </MenuItem>

        {isAuthenticated() ? (
          <HStack spacing='4'>
            <MenuButton href='/reservations'>Reservations</MenuButton>
            <MenuButton href='/' onClick={handleSignOut}>
              Sign out
            </MenuButton>
          </HStack>
        ) : (
          <HStack spacing='4'>
            <MenuButton href='/signin'>Sign in</MenuButton>
            <MenuButton href='/signup'>Sign up</MenuButton>
          </HStack>
        )}
      </Stack>
    </Box>
  );
}

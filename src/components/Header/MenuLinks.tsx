import { Box, Stack, Text } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { MenuButton } from './MenuButton';
import { MenuItem } from './MenuItem';

interface MenuItensProps {
  isOpen: boolean;
}

export function MenuItens({ isOpen }: MenuItensProps) {
  const github_link = 'https://github.com/Mesavip/mesavip-web-tsc-next';

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
        <MenuButton href='/signin'>Sign in</MenuButton>
        <MenuButton href='/signup'>Sign up</MenuButton>
      </Stack>
    </Box>
  );
}

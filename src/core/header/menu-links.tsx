import Link from 'next/link';
import {
  Box,
  Flex,
  FlexProps,
  Stack,
  StackProps,
  Text,
  Link as ChakraLink,
  TextProps,
  Image,
  LinkProps,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

import { useAuth } from 'contexts';
import { useHeaderCtx } from '.';

export function MenuLinks() {
  const { isAuthenticated, signOut } = useAuth();

  const github_link = 'https://github.com/danielmarques12/mesavip';

  return (
    <MenuLinksContainer>
      <MenuItem href={github_link} target='_blank' rel='noreferrer'>
        <FaGithub size='25' />
      </MenuItem>

      <MenuButton href='/home'>Restaurants</MenuButton>

      {isAuthenticated ? (
        <ButtonsContainer>
          <MenuButton href='/reservations'>Reservations</MenuButton>
          <MenuButton href='/home' onClick={signOut}>
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

function MenuLinksContainer({ children }: StackProps) {
  const { isOpen } = useHeaderCtx();

  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{
        base: '100%',
        md: 'auto',
      }}
      mb={{ base: '4', md: '0' }}
    >
      <Stack
        spacing={{ base: '4', md: '8' }}
        direction={{ base: 'column', md: 'row' }}
        align='center'
        justify={{ base: 'center', md: 'flex-end' }}
        pt={{ base: 4, md: 0 }}
      >
        {children}
      </Stack>
    </Box>
  );
}

function ButtonsContainer({ children }: FlexProps) {
  return (
    <Flex
      gridGap={{ base: '2', md: '4' }}
      direction={{
        base: 'column',
        md: 'row',
      }}
    >
      {children}
    </Flex>
  );
}

interface MenuButtonProps extends TextProps {
  href: string;
}

function MenuButton({ children, href, onClick }: MenuButtonProps) {
  const { toggle } = useHeaderCtx();

  return (
    <Link href={href} passHref>
      <ChakraLink _hover={{ outline: 'none' }} onClick={toggle}>
        <Flex
          alignItems='center'
          w='32'
          h='12'
          onClick={onClick}
          color='gray.500'
          _hover={{ bg: { base: '', md: 'gray.100' } }}
          textAlign='center'
          rounded='lg'
        >
          <Text
            fontWeight='500'
            _hover={{ textDecor: { base: 'underline', md: 'unset' } }}
            mx='auto'
          >
            {children}
          </Text>
        </Flex>
      </ChakraLink>
    </Link>
  );
}

function MenuItem({ children, href, ...rest }: LinkProps) {
  const { toggle } = useHeaderCtx();

  return (
    <Link href={href!} passHref>
      <ChakraLink _focus={{ outline: 'none' }} onClick={toggle} {...rest}>
        {children}
      </ChakraLink>
    </Link>
  );
}

export function Logo() {
  const logo = 'https://bit.ly/2YFsIhw';
  return (
    <MenuItem href='/home'>
      <Image w='40' h='20' src={logo} alt='Mesavip logo' />
    </MenuItem>
  );
}

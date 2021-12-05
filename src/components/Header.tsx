import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import { isAuthenticated, removeToken } from 'src/services/auth';
import { ListItemButton } from './ListItemButton';
import { SwitchTheme } from './SwitchTheme';
import { useColorModeValue } from '@chakra-ui/react';

export function Header() {
  const signout = () => {
    removeToken();
  };

  const logo = useColorModeValue(
    'https://bit.ly/2YFsIhw',
    'https://bit.ly/30mxrpz'
  );

  return (
    <nav className='nav_main'>
      <input type='checkbox' className='checkbox' id='checkbox_id' />
      <label htmlFor='checkbox_id' className='nav_toggle'>
        <FaBars size={25} color='#000' className='menu' />
        <FaTimes size={25} color='#000' className='close' />
      </label>

      <ul className='nav_menu'>
        <li className='logo'>
          <Link href='/'>
            <a>
              <Image width='165' height='80' src={logo} alt='Mesavip logo' />
            </a>
          </Link>
        </li>

        <li className='switch-theme'>
          <SwitchTheme />
        </li>

        <li className='on_hover'>
          <Link href='/'>
            <a target='_blank' rel='noreferrer' className='github-link'>
              <FaGithub size='25' />
            </a>
          </Link>
        </li>

        <li className='on_hover'>
          <Link href='/'>
            <a className='text'>Restaurants</a>
          </Link>
        </li>

        {isAuthenticated() ? (
          <>
            <li className='on_hover'>
              <Link href='/reservations'>
                <a className='text'>My reservations</a>
              </Link>
            </li>

            <ListItemButton label='Sign Out' href='/' onClick={signout} />
          </>
        ) : (
          <>
            <ListItemButton label='Sign in' href='/' />
            <ListItemButton label='Sign up' href='/signup' />
          </>
        )}
      </ul>
    </nav>
  );
}

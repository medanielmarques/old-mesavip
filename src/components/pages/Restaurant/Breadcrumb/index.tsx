import { useContext } from 'react';
import { Breadcrumb as ChakraBreadcrumb } from '@chakra-ui/react';
import { FaChevronRight } from 'react-icons/fa';

import { BreadcrumbItem } from './BreadcrumbItem';
import { RestaurantContext } from 'pages/restaurant/[id]';

export function Breadcrumb() {
  const { name, address } = useContext(RestaurantContext);

  return (
    <ChakraBreadcrumb
      color='gray.500'
      fontSize='xs'
      separator={<FaChevronRight size='10px' />}
      display={{ base: 'none', md: 'block' }}
    >
      <BreadcrumbItem text='Restaurants' href='/' />
      <BreadcrumbItem text={address!.cidade} href='/' />
      <BreadcrumbItem text={address!.bairro} href='/' />
      <BreadcrumbItem text={name} isCurrentPage />
    </ChakraBreadcrumb>
  );
}

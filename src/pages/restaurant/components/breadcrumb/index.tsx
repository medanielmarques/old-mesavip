import { Breadcrumb as ChakraBreadcrumb } from '@chakra-ui/react';
import { FaChevronRight } from 'react-icons/fa';

import { BreadcrumbItem } from './breadcrumb-item';
import { useRestaurantCtx } from 'pages/restaurant/hooks';

export function Breadcrumb() {
  const { name, address } = useRestaurantCtx();

  return (
    <ChakraBreadcrumb
      color='gray.500'
      fontSize='xs'
      separator={<FaChevronRight size='10px' />}
      display={{ base: 'none', md: 'block' }}
    >
      <BreadcrumbItem text='Restaurants' href='/home' />
      <BreadcrumbItem text={address!.cidade} href='/home' />
      <BreadcrumbItem text={address!.bairro} href='/home' />
      <BreadcrumbItem text={name} isCurrentPage />
    </ChakraBreadcrumb>
  );
}

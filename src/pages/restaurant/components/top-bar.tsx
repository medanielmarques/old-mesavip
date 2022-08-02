import {
  Badge,
  Box,
  Flex,
  Text,
  BreadcrumbLink,
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbItem as ChakraBreadcrumbItem,
  BreadcrumbItemProps as ChakraBreadcrumbItemProps,
} from '@chakra-ui/react';
import { FaChevronRight } from 'react-icons/fa';

import { RestaurantNameAndRate } from 'core/restaurant-name-and-rate';
import { useRestaurantCtx } from 'pages/restaurant/[id].page';

export function Topbar() {
  const { name, avg_rating, total_reviews } = useRestaurantCtx();

  return (
    <Flex direction='column' gridGap='3' mt='3'>
      <Breadcrumb />

      <Badges />

      <RestaurantNameAndRate
        restaurant={name}
        avg_rating={avg_rating}
        total_reviews={total_reviews}
        styles={{
          fontSize: { base: '20px', md: '28px', lg: '36px' },
          fontWeight: '700',
          ratingFontSize: '2xl',
        }}
      />

      <DistrictCulinaryAndPrice />
    </Flex>
  );
}

function Badges() {
  return (
    <Box>
      <Badge
        variant='solid'
        px='2'
        py='0.5'
        borderRadius='md'
        bg='#F8B333'
        fontSize='xs'
      >
        OUTDOOR SEATING
      </Badge>
    </Box>
  );
}

function DistrictCulinaryAndPrice() {
  const { address, culinary } = useRestaurantCtx();

  return (
    <Flex direction='column' gridGap='2' fontSize='sm'>
      <Flex gridGap='2'>
        <Text fontWeight='500'>{address?.bairro}</Text>
        <Text> &bull; </Text>
        <Text decoration='underline'>{culinary}</Text>
      </Flex>

      <Text>
        Dishes priced around: <Text as='b'>$29</Text>
      </Text>
    </Flex>
  );
}

function Breadcrumb() {
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

interface BreadcrumbItemProps extends ChakraBreadcrumbItemProps {
  text: string;
  href?: string;
  isCurrentPage?: boolean;
}

export function BreadcrumbItem({
  text,
  href,
  isCurrentPage,
  ...rest
}: BreadcrumbItemProps) {
  return (
    <ChakraBreadcrumbItem isCurrentPage={isCurrentPage} {...rest}>
      <BreadcrumbLink
        href={href}
        textDecoration={!!isCurrentPage ? 'none' : 'underline'}
        cursor={!!isCurrentPage ? '' : 'pointer'}
        _hover={{ color: '#000' }}
      >
        {text}
      </BreadcrumbLink>
    </ChakraBreadcrumbItem>
  );
}

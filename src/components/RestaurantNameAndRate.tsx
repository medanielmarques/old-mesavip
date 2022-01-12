import { Flex, Text, Icon } from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';

interface Styles {
  fontSize: string;
  fontWeight: '600' | '700';
  ratingFontSize?: string;
}

interface RestaurantNameAndRateProps {
  restaurant: string;
  avg_rating: number;
  total_reviews?: number;
  styles?: Styles;
}

export function RestaurantNameAndRate(props: RestaurantNameAndRateProps) {
  const { restaurant, avg_rating, total_reviews, styles } = props;

  return (
    <Flex
      justify='space-between'
      fontWeight={styles?.fontWeight ? styles?.fontWeight : '500'}
      alignItems='center'
    >
      {/* Currrently, if the name displayed is too big, it will break the layout */}
      <Text fontSize={styles?.fontSize}>{restaurant}</Text>

      <Flex direction='column'>
        <Flex
          justify='space-evenly'
          alignItems='center'
          color='#ffbb00'
          fontSize={styles?.ratingFontSize}
        >
          <Icon as={FaStar} />
          <Text ml='1'>{avg_rating}</Text>
        </Flex>

        <Text fontSize='14px' fontWeight='400'>
          {total_reviews} reviews
        </Text>
      </Flex>
    </Flex>
  );
}

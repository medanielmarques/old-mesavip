import { Restaurant } from 'src/interfaces/restaurant';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export function RestaurantCard(props: RestaurantCardProps) {
  const { restaurant } = props;

  return (
    <div>
      <h1 style={{ color: '#000' }}>{restaurant.name}</h1>
    </div>
  );
}

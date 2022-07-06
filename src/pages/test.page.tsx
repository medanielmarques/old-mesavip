import { api } from 'services/api';
import { Restaurant } from 'types';
import { useRestaurants } from './home/hooks/use-restaurants';

export default function Test({ restaurants }: { restaurants: Restaurant[] }) {
  const { data, isLoading } = useRestaurants({
    filters: {
      name: 'Schinner Group',
      cuisine: 'exercitationem nihil',
      avg_rating: 3,
    },
    options: {
      enabled: true,
    },
  });

  if (!isLoading) {
    console.log(data);
  }

  return (
    <div>
      {restaurants.map((restaurant) => (
        <div key={restaurant.id} aria-label='test'>
          <h1>{restaurant.id}</h1>
          <h1>{restaurant.name}</h1>
          <h1>{restaurant.culinary}</h1>
          <h1>{restaurant.bairro}</h1>
          <h1>{restaurant.image}</h1>
          <h1>{restaurant.avg_rating}</h1>
          <h1>{restaurant.total_reviews}</h1>
        </div>
      ))}
    </div>
  );
}

export const getServerSideProps = async () => {
  const { data: restaurants } = await api.get<Restaurant[]>(
    `restaurants/list-all`
  );

  return {
    props: {
      restaurants,
    },
  };
};

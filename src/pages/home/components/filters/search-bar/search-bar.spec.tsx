import { render, screen } from '@testing-library/react';
import { SearchBar } from '.';
import { RestaurantsFiltersContext } from 'contexts';

describe('Restaurants Filters -> SearchBar Component', () => {
  it('displays the search and close icon according to the current Search state', () => {
    const { rerender } = render(<SearchBar />);

    const searchIcon = screen.getByLabelText('search-icon');
    expect(searchIcon).toBeInTheDocument();

    rerender(
      <RestaurantsFiltersContext.Provider
        value={{
          searchRestaurant: 'searchRestaurant',
          selectedCuisine: 'string',
          score: 5,
          searchRestaurantSet: jest.fn(),
          selectedCuisineSet: jest.fn(),
          scoreSet: jest.fn(),
        }}
      >
        <SearchBar />
      </RestaurantsFiltersContext.Provider>
    );

    const closeIcon = screen.getByLabelText('close-icon');
    expect(closeIcon).toBeInTheDocument();

    //userEvent.type(searchRestaurant, 'my-search-here')

    rerender(
      <RestaurantsFiltersContext.Provider
        value={{
          searchRestaurant: '',
          selectedCuisine: 'string',
          score: 5,
          searchRestaurantSet: jest.fn(),
          selectedCuisineSet: jest.fn(),
          scoreSet: jest.fn(),
        }}
      >
        <SearchBar />
      </RestaurantsFiltersContext.Provider>
    );

    const newSearchIcon = screen.getByLabelText('search-icon');
    expect(newSearchIcon).toBeInTheDocument();
  });

  it('renders corrrectly, according to the default state', () => {
    render(<SearchBar />);

    const placeholder = screen.getByPlaceholderText(
      'Find restaurants or cuisines'
    );
    const searchIcon = screen.getByLabelText('search-icon');

    expect(placeholder).toBeInTheDocument();
    expect(searchIcon).toBeInTheDocument();
  });
});

import { render, within } from '@testing-library/react';
// import { mocked } from 'ts-jest/utils';
import { api } from 'services/api';
import { restaurantsList } from 'tests/mocks/restaurantsList';
// import Home, { getServerSideProps } from 'pages/index.page';
import { reactQueryWrapper } from 'tests/mocks/reactQueryClient';

jest.mock('next/router');
jest.mock('services/api');
// const mockedApi = mocked(api, true);

describe('Home Page', () => {
  // it('renders the restaurants list correctly', () => {
  //   const { getAllByRole } = render(<Home initialData={restaurantsList} />, {
  //     wrapper: reactQueryWrapper(),
  //   });

  //   const cards = getAllByRole('restaurant-card');
  //   expect(cards.length).toBe(restaurantsList.length);
  // });

  it('smth', () => {});
});

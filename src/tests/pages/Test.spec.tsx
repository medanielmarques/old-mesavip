import { render, within } from '@testing-library/react';
// import { mocked } from 'ts-jest/utils';
import { api } from 'services/api';
import Test, { getServerSideProps } from 'pages/test-page';
import { restaurantsList } from 'tests/mocks/restaurantsList';

jest.mock('next/router');
jest.mock('services/api');
// const mockedApi = mocked(api, true);

describe('Test Page', () => {
  it('renders correctly', () => {
    const { getAllByLabelText } = render(
      <Test restaurants={restaurantsList} />
    );

    const testList = getAllByLabelText('test');
    expect(testList.length).toBe(restaurantsList.length);

    testList.forEach((restaurant, index) => {
      const { getByText } = within(restaurant);

      Object.values(restaurantsList[index]).forEach((value) => {
        expect(getByText(value)).toBeInTheDocument();
      });
    });
  });

  it('loads initial data', async () => {
    // mockedApi.get.mockResolvedValue({ data: restaurantsList });

    const response = await getServerSideProps();

    expect(response.props.restaurants).toEqual(
      expect.arrayContaining(restaurantsList)
    );
  });
});

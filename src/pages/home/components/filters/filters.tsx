import { Divider } from '@chakra-ui/react';
import { FiltersWrapper } from './filters-wrapper';
import { Cuisines } from './cuisines';
import { ReviewScore } from './review-score';
import { SearchBar } from './search-bar';

export function Filters() {
  return (
    <>
      <FiltersWrapper>
        <SearchBar />
        <Cuisines />
        <Divider />
        <ReviewScore />
      </FiltersWrapper>
    </>
  );
}

import { Divider } from '@chakra-ui/react';
import { Wrapper } from './Wrapper';
import { SearchBar } from './SearchBar';
import { Cuisines } from './Cuisines';
import { ReviewScore } from './ReviewScore';

export function Filters() {
  return (
    <>
      <Wrapper>
        <SearchBar />
        <Cuisines />
        <Divider />
        <ReviewScore />
      </Wrapper>
    </>
  );
}

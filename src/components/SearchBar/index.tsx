import { useEffect, useState } from 'react';
import { Flex, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { FaTimes } from 'react-icons/fa';

interface SearchBarProps {
  searchRestaurantSet(name: string): void;
}

export function SearchBar(props: SearchBarProps) {
  const { searchRestaurantSet } = props;
  const [search, searchSet] = useState('');

  function handleClearSearch() {
    searchSet('');
  }

  useEffect(() => {
    setTimeout(() => {
      searchRestaurantSet(search);
    }, 500);
  }, [search]);

  return (
    <Flex as='form'>
      <InputGroup size='lg'>
        <Input
          fontSize='16px'
          name='search'
          type='text'
          placeholder='Search your favorite restaurants'
          value={search}
          onChange={(e) => searchSet(e.target.value)}
        />

        {search && (
          <InputRightElement
            children={<FaTimes />}
            cursor='pointer'
            borderRadius='5px'
            _hover={{ bg: 'gray.300' }}
            onClick={handleClearSearch}
          />
        )}
      </InputGroup>
    </Flex>
  );
}

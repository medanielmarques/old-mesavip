import { useState } from 'react';
import { Flex, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { FaSearch, FaTimes } from 'react-icons/fa';

interface SearchBarProps {
  searchRestaurant: string;
  searchRestaurantSet(name: string): void;
}

export function SearchBar(props: SearchBarProps) {
  const { searchRestaurant, searchRestaurantSet } = props;
  const [search, searchSet] = useState('');

  function handleClick() {
    if (searchRestaurant) {
      clearSearch();
    } else {
      searchRestaurantSet(search);
    }
  }

  function clearSearch() {
    searchSet('');
    searchRestaurantSet('');
  }

  return (
    <Flex as='form'>
      <InputGroup size='lg'>
        <Input
          fontSize='md'
          name='search'
          type='text'
          placeholder='Find restaurants or cuisines'
          value={search}
          onChange={(e) => searchSet(e.target.value)}
        />

        <InputRightElement
          cursor='pointer'
          borderRadius='md'
          _hover={{ bg: 'gray.300' }}
          onClick={handleClick}
        >
          {searchRestaurant ? <FaTimes /> : <FaSearch />}
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
}

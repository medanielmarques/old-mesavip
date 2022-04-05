import { Flex, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { useSearchBar } from 'hooks/restaurants/useSearchBar';

export function SearchBar() {
  const { search, searchSet, searchRestaurant, handleClick } = useSearchBar();

  return (
    <Flex as='form' bg='white' mx='auto' w='100%'>
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
          borderRightRadius='md'
          _hover={{ bg: 'gray.200' }}
          onClick={handleClick}
        >
          {searchRestaurant ? <FaTimes /> : <FaSearch />}
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
}

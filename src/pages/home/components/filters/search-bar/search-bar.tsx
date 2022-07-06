import { Flex, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useSearchBar } from 'pages/home/hooks/use-search-bar';
import { FaSearch, FaTimes } from 'react-icons/fa';

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
          {searchRestaurant ? (
            <FaTimes aria-label='close-icon' />
          ) : (
            <FaSearch aria-label='search-icon' />
          )}
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
}

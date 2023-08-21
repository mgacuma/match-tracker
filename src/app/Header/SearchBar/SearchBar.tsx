import { InputGroup, InputLeftElement, Icon, Input } from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';

export function SearchBar(){
	return(
		<InputGroup size='md'>
			<InputLeftElement
				pointerEvents="none"
				children={<Icon as={FiSearch} color="gray.200" />}
			/>
			<Input type="text" placeholder="Search" borderRadius='25px' w='27ch' border='2px solid white' />
		</InputGroup>
	);
}
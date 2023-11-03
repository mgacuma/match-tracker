import { InputGroup, InputLeftElement, Icon, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

export function SearchBar(){
	const [value, setValue] = useState('');

	function onSubmit(e){
		e.preventDefault();
		setValue(value.trim());
		if(value.length !== 0){
			console.log('asd');
			window.location.assign('/match-tracker/search?q=' + value);
			setValue('');
		}
	}

	return(
		<form onSubmit={onSubmit}>
			<InputGroup size='md' >
				<InputLeftElement _hover={{cursor: 'pointer'}} pointerEvents='auto'>
					<Icon onClick={onSubmit} as={FiSearch} color="gray.200" />
				</InputLeftElement>
				<Input type="text" placeholder="Search" onChange={(e) => {setValue(e.target.value);}} borderRadius='25px' w='27ch' border='2px solid white' />
			</InputGroup>
		</form>
	);
}
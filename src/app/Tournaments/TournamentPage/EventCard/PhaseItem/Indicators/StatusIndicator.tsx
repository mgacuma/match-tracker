import { Box, Spinner, Tag, TagLabel, TagLeftIcon } from '@chakra-ui/react';
import { FiCheckCircle, FiClock, FiUsers, FiX } from 'react-icons/fi';

export function StatusIndicator({...props}){
    enum STATES {
        CREATED = 'CREATED',
        ACTIVE = 'ACTIVE',
        COMPLETED = 'COMPLETED',
        READY = 'READY',
        INVALID = 'INVALID',
        CALLED = 'CALLED',
        QUEUED = 'QUEUED'
    }

    function renderState(state: string){
    	switch(state){
    	case STATES.CREATED:{
    		return (
    			<Tag colorScheme="gray">
    				<TagLeftIcon as={FiClock} boxSize='14px' />                        
    				<TagLabel>Not Started</TagLabel>
    			</Tag>
    		);
    	}
    	case STATES.ACTIVE:{
    		return(
    			<Tag colorScheme="blue">
    				<TagLeftIcon as={Spinner} 
    					thickness='2.5px'
    					speed='1s'
    					emptyColor='gray.100'
    					color='blue.300'
    					size='xl' boxSize='14px' 
    				/>                        
    				<TagLabel>In Progress</TagLabel>
    			</Tag>
    		);
    	}
    	case STATES.COMPLETED:{
    		return(
    			<Tag colorScheme="green">
    				<TagLeftIcon as={FiCheckCircle} boxSize='14px' />                        
    				<TagLabel>Completed</TagLabel>
    			</Tag>
    		);
    	}
    	case STATES.READY:
    	case STATES.CALLED:
    	case STATES.QUEUED:{
    		return(
    			<Tag colorScheme="yellow">
    				<TagLeftIcon as={FiUsers} boxSize='14px' />                        
    				<TagLabel>Starting Soon</TagLabel>
    			</Tag>
    		);
    	}
    	case STATES.INVALID:
    	default: {
    		return(
    			<Tag colorScheme="red">
    				<TagLeftIcon as={FiX} boxSize='14px' />                        
    				<TagLabel>Error</TagLabel>
    			</Tag>
    		);
    	}
    	}
    }

    return(
    	<Box {...props}>
    		{renderState(props.status)}
    	</Box>
    );
    
}
import { Card, Skeleton, VStack, Divider } from '@chakra-ui/react';

export function EventSkeleton(){
	return(
		<Card background='white' p='24px' borderRadius='16px' my='36px'>
			<Skeleton h='46px' mb='24px' w='32ch' />
			<VStack w='100%' divider={<Divider />} gap='4px'>
				<Skeleton key={1} h='46px' w='100%' />
				<Skeleton key={2} h='46px' w='100%' />
				<Skeleton key={3} h='46px' w='100%' />
			</VStack>
		</Card>
	);
}
import { SimpleGrid, Skeleton } from '@chakra-ui/react';
import { SkeletonCard } from './SkeletonCard/SkeletonCard';

export function SkeletonGrid(){
<<<<<<< HEAD
<<<<<<< HEAD
    return(
        <>
            {/* <Skeleton height='48px' mb='20px' width='440px' /> */}
            <SimpleGrid columns={3} p='15px' spacing='30px'>
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
            </SimpleGrid>
        </>
    )
=======
=======
>>>>>>> parent of a5ff45ac (Merge pull request #9 from mgacuma/feature-paginate-tournaments)
	return(
		<>
			<Skeleton height='48px' mb='20px' width='440px' />
			<SimpleGrid minChildWidth={{sm:'270px', md: '320px'}} spacingX='30px' spacingY='30px' >
				<SkeletonCard />
				<SkeletonCard />
				<SkeletonCard />
				<SkeletonCard />
				<SkeletonCard />
				<SkeletonCard />
			</SimpleGrid>
		</>
	);
<<<<<<< HEAD
>>>>>>> parent of a5ff45ac (Merge pull request #9 from mgacuma/feature-paginate-tournaments)
=======
>>>>>>> parent of a5ff45ac (Merge pull request #9 from mgacuma/feature-paginate-tournaments)
}
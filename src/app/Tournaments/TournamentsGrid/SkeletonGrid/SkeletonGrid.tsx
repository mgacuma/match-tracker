import { SimpleGrid, Skeleton } from '@chakra-ui/react';
import { SkeletonCard } from './SkeletonCard/SkeletonCard';

export function SkeletonGrid(){
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
}
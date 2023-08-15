import { SimpleGrid, Skeleton } from "@chakra-ui/react";
import { SkeletonCard } from "./SkeletonCard/SkeletonCard";

export function SkeletonGrid(){
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
    )
}
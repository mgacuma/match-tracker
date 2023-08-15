import { Container } from "@chakra-ui/react";
import { HeroSkeleton } from "./HeroSkeleton/HeroSkeleton";
import { EventSkeleton } from "./EventSkeleton/EventSkeleton";

export function SkeletonPage(){
    return(
        <Container maxW='980px' h='90dvw' mt='64px' >
            <HeroSkeleton />
            <EventSkeleton />
            <EventSkeleton />
        </Container>
    )
}
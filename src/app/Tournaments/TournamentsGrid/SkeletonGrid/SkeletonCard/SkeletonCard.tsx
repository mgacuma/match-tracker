import { Card, Container, Text, Image, Heading, ButtonGroup, Button, Link, Skeleton } from "@chakra-ui/react";


export function SkeletonCard(){
    return(
        <Card borderRadius='24px' >
            <Container display='flex' dir="row" pt='18px' px='18px'>
                <Skeleton boxSize='64px' />
                <Skeleton ml='16px' width='80%' height='44px' />
            </Container>
            <Container centerContent >
            <ButtonGroup pt='16px' pb='16px'>
                <Skeleton height='22px' width='122px' />
                <Skeleton height='22px' width='122px' />
            </ButtonGroup>
            </Container>
        </Card>
    )
}
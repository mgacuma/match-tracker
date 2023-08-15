import { Card, Container, Box, Center, Divider, Wrap, Skeleton, HStack } from "@chakra-ui/react";

export function HeroSkeleton(){
    return(
        <Card minH='240px' background='white' p={0} borderRadius='16px' flexDirection='row' alignContent='center' justifyContent={'center'}>
            <HStack p='24px' w='50%' alignItems='start' gap='16px'>
                <Skeleton key='image' boxSize='96px' />
                <Box key='details' flex={2}>
                    <Skeleton size='lg' />
                    <Box display='flex' flexDirection='column'>
                        <Skeleton h='48px' w='80%' mb='16px'/>
                        <Skeleton h='16px' w='50%' mb='12px' />
                        <Skeleton h='16px' w='50%' mb='12px' />
                        <Skeleton h='16px' w='50%' />
                    </Box>
                </Box>
            </HStack>
            <Center py='16px'>
                <Divider orientation='vertical' />
            </Center>
            <Container centerContent w='50%' justifyContent='center' alignContent='center' px='16px' py='16px'>
                <Wrap spacing='10px' justify='center'>
                    <Skeleton w='16ch' h='32px' borderRadius='6px' />
                    <Skeleton w='16ch' h='32px' borderRadius='6px' />
                    <Skeleton w='16ch' h='32px' borderRadius='6px' />
                </Wrap>
            </Container>
        </Card>
    )
}
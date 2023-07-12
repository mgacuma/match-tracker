import { Box, Button, ButtonGroup, Card, Container, Flex, Heading, Spacer, VStack, Text, StackDivider, Link, textDecoration, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom'

export function Event(props: {event: any}) {

    let phases = props.event.phases

    return (
        <AccordionItem minW='980px' borderRadius='16px' px='24px' isDisabled={phases?.length === 0 ? true : false}>
            <AccordionButton>
                <Heading  size='md' >{props.event.name}</Heading>

                {phases?.length > 0 && <AccordionIcon />}
            </AccordionButton>
            <AccordionPanel>
                <VStack my='16px' mx='16px' divider={<StackDivider />}>
                    { props.event.phases.length > 0 && props.event.phases.map(phase => 
                        <Flex w='100%' gap='2'>
                            <Link as={RouterLink} to={`event/${props.event.id}`} >
                                <Box>
                                    <Text>{phase.name}</Text>
                                </Box>
                            </Link>
                            <Spacer />
                            {phase.state}
                        </Flex>)
                    }
                    { props.event.phases.length === 0 && 
                        <Flex w='100%' gap='2'>
                            <Box>
                                <Text>{'No brackets available'}</Text>
                            </Box>
                        </Flex>
                    }
                </VStack>
            </AccordionPanel>
        </AccordionItem>
    )
}
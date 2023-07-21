import { Box, Button, ButtonGroup, Card, Container, Flex, Heading, Spacer, VStack, Text, StackDivider, Link, textDecoration, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Accordion } from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom'
import { StatusIndicator } from "./StatusIndicator";
import { Phase } from "../Phase/Phase";

export function Event(props: {event: any}) {

    let event = props.event

    return (
        <Card background='white' p='24px' borderRadius='16px' my='36px'>
            <Heading mb='16px'>{event.name}</Heading>
            <Accordion allowMultiple>
                {event.phases.length > 0 && event.phases.map(phase => <Phase phase={phase} />)}
                {event.phases.length < 1 && <Text>No Brackets Yet</Text>}
            </Accordion>
        </Card>
    )
}
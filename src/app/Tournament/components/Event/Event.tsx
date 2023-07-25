
import { Accordion, Box, Card, HStack, Heading, Text } from "@chakra-ui/react";
import { Phase } from "../Phase/Phase";

export function Event(props: {event: any}) {

    let event = props.event

    return (
        <Card background='white' p='24px' borderRadius='16px' my='36px'>
            <Heading mb='16px'>{event.name}</Heading>
            <Accordion allowMultiple defaultIndex={event?.phases?.length === 1 ? [0] : [-1]}>
                {event.phases.length > 0 && event.phases.map((phase: any) => <Phase phase={phase} />)}
                {event.phases.length < 1 && <HStack justifyContent='center'><Text pt='48px' pb='64px'>No Brackets Yet</Text></HStack>}
            </Accordion>
        </Card>
    )
}

import { Accordion, Card, HStack, Heading, Text } from "@chakra-ui/react";
import { PhaseItem } from "./PhaseItem/PhaseItem";

export function EventCard(props: {event: any}) {
    const event = props.event

    return (
        <Card background='white' p='24px' borderRadius='16px' my='36px'>
            <Heading mb='16px'>{event.name}</Heading>
            <Accordion allowMultiple defaultIndex={event?.phases?.length === 1 ? [0] : []}>
                {event.phases.length > 0 && event.phases.map((phase: any) => <PhaseItem phase={phase} />)}
                {event.phases.length < 1 && <HStack justifyContent='center'><Text key='no-brackets' pt='48px' pb='64px'>No Brackets Yet</Text></HStack>}
            </Accordion>
        </Card>
    )
}
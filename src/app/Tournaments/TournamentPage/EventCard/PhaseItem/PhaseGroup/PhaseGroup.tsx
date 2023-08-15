import { Box, Button, Flex, HStack, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { formatName } from "./utils/formatName";

export function PhaseGroup(props: { phaseGroup: any }){
    const { phaseGroup } = props

    const states: { [key: string]: any } = {
        1: 'Not Started',
        2: 'In Progress',
        3: 'Complete',
        4: 'Ready',
        5: 'Invalid',
        6: 'Called',
        7: 'Queued'
    }

    return(
        <Box w='100%'>
            <Button as={Link} href={phaseGroup.bracketUrl} target='_blank' style={{textDecoration: 'none'}} p='8px' justifyContent='none'  w='100%' background='none' h='100%' borderRadius='0px'>
                <Flex dir='row' justifyContent='start' alignItems='center' textOverflow='clip' overflow='clip'>
                    <VStack spacing={2} alignItems='start'>
                        <Heading key='id' size='md'>{'Pool ' + phaseGroup.displayIdentifier + ' '}</Heading>
                        <Text key='state' fontWeight={300}>{states[phaseGroup.state]}</Text>
                    </VStack>
                    <Box px='16px'>
                        <HStack>
                            {phaseGroup.seeds?.nodes?.slice(0, 4).map((seed: { entrant: { name: string; }; }) => <Text key={seed?.entrant?.name}>{formatName(seed?.entrant?.name)}</Text>)}
                        </HStack>
                    </Box>
                </Flex>
            </Button>
        </Box>
    )
}
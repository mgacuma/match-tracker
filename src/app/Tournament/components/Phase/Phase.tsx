import { useQuery } from "@apollo/client";
import { GET_PHASE } from "./queries/GET_PHASE";
import { PhaseGroup } from "./components/PhaseGroup";
import { StatusIndicator } from "../Event/StatusIndicator";
import { BracketIndicator } from "./components/BracketIndicator";
import { Key, useState } from "react";
import { AccordionItem, AccordionButton, Flex, VStack, Heading, HStack, Divider, Spacer, Tag, Skeleton, AccordionIcon, AccordionPanel, Button, Text } from "@chakra-ui/react";



export function Phase(props: {phase: any}){

    const { loading, error, data } = useQuery(GET_PHASE, {
        variables: {
            phaseId: props.phase.id
        },
        fetchPolicy: 'no-cache'
    });

    const [showAll, setShowAll] = useState(false)

    let phase;

    if(data){
        phase = data.phase
    } else phase = props.phase
    
    return( 
        <>
        { loading && 
            <AccordionItem>
                <AccordionButton>
                    <Flex w='100%' alignItems='center'>
                        <VStack alignItems={'start'} spacing={0}>
                            <Heading key={'name'}>{phase.name}</Heading>
                            <HStack divider={<Divider orientation='vertical' border='4px solid' />}>
                                <Text key={'entrants'}>{phase.numSeeds + ' Entrants '}</Text>
                                <Text key={'numPools'}>{ phase.groupCount + ' Pools '}</Text>
                                <BracketIndicator key={'type'} state={phase.bracketType} />
                            </HStack>
                        </VStack>
                        <Spacer />
                        <Tag w='12ch'><Skeleton/></Tag>
                    </Flex>
                    <AccordionIcon ml='8px' />
                </AccordionButton>

                <AccordionPanel>
                    <VStack spacing='8px'>
                        <Skeleton w='100%' h='48px'/>
                        <Skeleton w='100%' h='48px'/>
                        <Skeleton w='100%' h='48px'/>
                        <Skeleton w='100%' h='48px'/>
                    </VStack>
                </AccordionPanel>
            </AccordionItem>
        }
        
        { data && 
            <AccordionItem>

                <AccordionButton>
                    <Flex w='100%' alignItems='center'>
                        <VStack alignItems={'start'} spacing={0}>
                            <Heading key={'name'}>{phase.name}</Heading>
                            <HStack divider={<Divider orientation='vertical' border='4px solid' />}>
                                <Text key={'entrants'}>{phase.numSeeds + ' Entrants '}</Text>
                                { phase.groupCount > 1 ? 
                                    <Text key={'numPools'}>{ phase.groupCount + ' Pools' }</Text>: 
                                    <Text key={'numPools'}>{ phase.groupCount + ' Pool' }</Text>
                                }
                                <BracketIndicator key={'type'} state={phase.bracketType} />
                            </HStack>
                        </VStack>
                        <Spacer />
                        <StatusIndicator status={phase.state} />
                    </Flex>
                    <AccordionIcon ml='8px' />
                </AccordionButton>

                <AccordionPanel>
                    {!showAll && phase.phaseGroups.nodes.slice(0, 8).map((phaseGroup: { id: Key | null | undefined; }) => 
                        <PhaseGroup phaseGroup={phaseGroup} key={phaseGroup.id} />
                    )}
                    {showAll && phase.phaseGroups.nodes.map((phaseGroup: { id: Key | null | undefined; }) => 
                        <PhaseGroup phaseGroup={phaseGroup} key={phaseGroup.id} />
                    )}
                    {!showAll && phase.phaseGroups.nodes.length > 8 && <Button variant='link' onClick={() => {setShowAll(true)}} p='8px' justifyContent='center'  w='100%' background='none' h='100%' borderRadius='0px'><Text>View all {phase.phaseGroups.nodes.length} pools</Text></Button>}
                </AccordionPanel>
            </AccordionItem>
        }
        </>
    )
}
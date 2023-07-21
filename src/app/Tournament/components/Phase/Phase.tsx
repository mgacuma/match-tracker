import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Card, Container, Divider, Flex, HStack, Heading, Icon, Image, Spacer, Text, VStack, useDisclosure, Skeleton, Tag, Link  } from "@chakra-ui/react";
import { Outlet, useParams } from "react-router-dom";
import { Header } from "../../../Header/Header";
import { useQuery } from "@apollo/client";
import { GET_PHASE } from "./queries/GET_PHASE";
import { NavTier } from "../Nav/NavTier";
import { FiCircle } from "react-icons/fi";
import { PhaseGroup } from "./components/PhaseGroup";
import { StatusIndicator } from "../Event/StatusIndicator";
import { BracketIndicator } from "./components/BracketIndicator";
import { useState } from "react";



export function Phase(props: {phase: any}){

    const { loading, error, data } = useQuery(GET_PHASE, {
        variables: {
            phaseId: props.phase.id
        },
        fetchPolicy: 'no-cache'
    });

    const [showAll, setShowAll] = useState(false)

    
    if(loading){
        const phase = props.phase;

        return(
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
        )

    } else if(data) {
        const phase = data.phase;

        console.log(data)

        return(
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
                    {!showAll && phase.phaseGroups.nodes.slice(0, 8).map(phaseGroup => 
                        <PhaseGroup phaseGroup={phaseGroup} key={phaseGroup.id} />
                    )}
                    {showAll && phase.phaseGroups.nodes.map(phaseGroup => 
                        <PhaseGroup phaseGroup={phaseGroup} key={phaseGroup.id} />
                    )}
                    {!showAll && phase.phaseGroups.nodes.length > 8 && <Button variant='link' onClick={() => {setShowAll(true)}} p='8px' justifyContent='center'  w='100%' background='none' h='100%' borderRadius='0px'><Text>View all {phase.phaseGroups.nodes.length} pools</Text></Button>}
                </AccordionPanel>
            </AccordionItem>
        )
    }
}
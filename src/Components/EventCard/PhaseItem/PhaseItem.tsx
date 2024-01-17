import { useQuery } from '@apollo/client';
import { GET_PHASE } from './queries/GET_PHASE';
import { PhaseGroup } from './PhaseGroup/PhaseGroup';
import { StatusIndicator } from './Indicators/StatusIndicator';
import { BracketIndicator } from './Indicators/BracketIndicator';
import { Key, useState } from 'react';
import { AccordionItem, AccordionButton, Flex, VStack, Heading, HStack, Divider, Spacer, Tag, Skeleton, AccordionIcon, AccordionPanel, Button, Text } from '@chakra-ui/react';



export function PhaseItem(props: {phase: any}){

	const { loading, error, data } = useQuery(GET_PHASE, {
		variables: {
			phaseId: props.phase.id
		},
		fetchPolicy: 'no-cache'
	});

	const [showAll, setShowAll] = useState(false);

	let phase;
	if(data){
		phase = data.phase;
	} else phase = props.phase;
    
	return( 
		<AccordionItem>
			<AccordionButton>
				<Flex w='100%' alignItems='center'>
					<VStack alignItems={'start'} spacing={0}>
						<Heading key={'ph-name'}>{phase.name}</Heading>
						<HStack key='ph-hstack' divider={<Divider orientation='vertical' border='4px solid' />}>
							<Text key={'ph-entrants'}>{phase.numSeeds + ' Entrants '}</Text>
							{ phase.groupCount > 1 ? 
								<Text key={'ph-numPools'}>{ phase.groupCount + ' Pools' }</Text> : 
								<Text key={'ph-numPool'}>{ phase.groupCount + ' Pool' }</Text>
							}
							<BracketIndicator key={'type'} state={phase.bracketType} />
						</HStack>
					</VStack>
					<Spacer />
					{loading && <Skeleton h='24px' w='12ch' />}
					{data && <StatusIndicator status={phase.state} />}
				</Flex>
				<AccordionIcon ml='8px' />
			</AccordionButton>

			{ data && 
                <AccordionPanel>
                	{!showAll && phase.phaseGroups.nodes.slice(0, 8).map((phaseGroup: { id: Key | null | undefined; }) => 
                		<PhaseGroup phaseGroup={phaseGroup} key={phaseGroup.id} />
                	)}
                	{showAll && phase.phaseGroups.nodes.map((phaseGroup: { id: Key | null | undefined; }) => 
                		<PhaseGroup phaseGroup={phaseGroup} key={phaseGroup.id} />
                	)}
                	{!showAll && phase.phaseGroups.nodes.length > 8 && <Button variant='link' onClick={() => {setShowAll(true);}} p='8px' justifyContent='center'  w='100%' background='none' h='100%' borderRadius='0px'><Text>View all {phase.phaseGroups.nodes.length} pools</Text></Button>}
                </AccordionPanel>
			}
		</AccordionItem>
	);
}
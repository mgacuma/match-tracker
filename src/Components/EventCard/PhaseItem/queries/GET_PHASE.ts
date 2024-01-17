import { gql } from '@apollo/client';

export const GET_PHASE = gql`
    query GetPhase($phaseId: ID){
        phase(id: $phaseId){
            id
            bracketType
            groupCount
            name
            numSeeds
            phaseGroups {
                nodes {
                    id
                    bracketUrl
                    displayIdentifier
                    numRounds
                    seedMap
                    seeds(query: {perPage: 8}){
                        nodes {
                            entrant {
                                initialSeedNum
                                name
                                participants {
                                    images {
                                        type
                                        url
                                    }
                                }
                            }
                        }
                    }
                    state
                }
            }
            state
            
        }
    }
`;
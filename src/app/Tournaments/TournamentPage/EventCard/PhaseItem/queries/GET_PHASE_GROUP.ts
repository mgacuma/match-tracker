import { gql } from "@apollo/client";

export const GET_PHASE_GROUP = gql`
    query GetPhaseGroup($phaseGroupId: ID){
        phaseGroup(id: $phaseGroupId){
            id
            bracketType
            bracketUrl
            displayIdentifier
            numRounds
            seedMap
            seeds(query: {perPage: 100}){
                nodes {
                    entrant {
                        initialSeedNum
                        name
                        
                    }
                }
            }
            state
        }
    }
`
import { gql } from "@apollo/client";

export const GET_TOURNAMENT = gql`
    query GetTournament($tournamentId: ID) {
        tournament(id: $tournamentId) {
        id
        addrState
        city
        countryCode
        endAt
        events {
            id
            images {
            type
            url
            }
            name
            numEntrants
            phases {
            name
            state
            }
            startAt
            state
            videogame {
            images {
                type
                url
            }
            name
            }
        }
        images {
            type
            url
        }
        isOnline
        name
        numAttendees
        slug
        startAt
        }
    }  
`
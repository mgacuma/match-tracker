import { gql } from "@apollo/client";

export const GET_EVO = gql`
    query GetEvoTournament {
        tournaments(query: {filter: {staffPicks: true, name: "Evo"}}) {
            nodes {
                id
                addrState
                city
                countryCode
                endAt
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
    }
`
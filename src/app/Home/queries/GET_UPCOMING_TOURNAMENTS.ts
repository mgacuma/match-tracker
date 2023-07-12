import { gql } from "@apollo/client";

export const GET_UPCOMING_TOURNAMENTS = gql`
    query GetUpcomingTournaments {
        tournaments(query: {filter: {isFeatured: true, upcoming: true}}) {
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
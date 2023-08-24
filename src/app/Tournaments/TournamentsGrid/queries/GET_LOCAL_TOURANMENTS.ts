import { gql } from '@apollo/client';

export const GET_LOCAL_TOURNAMENTS = gql`
    query GetLocalTournaments($coordinates: String) {
        tournaments(query: {filter: {upcoming: true, location: {distanceFrom: $coordinates, distance: "50mi"}}}) {
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
`;
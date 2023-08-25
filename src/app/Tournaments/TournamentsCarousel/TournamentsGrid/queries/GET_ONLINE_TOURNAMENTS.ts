import { gql } from '@apollo/client';

export const GET_ONLINE_TOURNAMENTS = gql`
    query GetOnlineTournaments($page: Int, $perPage: Int) {
        tournaments(query: { perPage: $perPage, page: $page, filter: {hasOnlineEvents: true, upcoming: true}}) {
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
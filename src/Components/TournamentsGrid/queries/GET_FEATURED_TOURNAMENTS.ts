import { gql } from '@apollo/client';

export const GET_FEATURED_TOURNAMENTS = gql`
    query GetFeaturedTournaments($page: Int, $perPage: Int) {
        tournaments(query: { perPage: $perPage, page: $page, filter: {isFeatured: true, staffPicks: true}}) {
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
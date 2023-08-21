import { gql } from "@apollo/client";

export const GET_UPCOMING_TOURNAMENTS = gql`
    query GetUpcomingTournaments($page: Int, $perPage: Int) {
        tournaments(query: { perPage: $perPage, page: $page, filter: {isFeatured: true, upcoming: true}}) {
            pageInfo {
                total
                totalPages
                page
                perPage
            } nodes {
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
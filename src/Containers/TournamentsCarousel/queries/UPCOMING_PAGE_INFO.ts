import { gql } from '@apollo/client'

export const UPCOMING_PAGE_INFO = gql`
query GetUpcomingTournamentsPageInfo($page: Int, $perPage: Int) {
    tournaments(query: { perPage: $perPage, page: $page, filter: {isFeatured: true, upcoming: true}}) {
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
        pageInfo {
            total
            totalPages
            page
            perPage
        }
    }
}
`

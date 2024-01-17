import { gql } from '@apollo/client'

export const LOCAL_PAGE_INFO = gql`
    query GetLocalTournamentsPageInfo($coordinates: String, $page: Int, $perPage: Int) {
        tournaments(query: { perPage: $perPage, page: $page, filter: {upcoming: true, location: {distanceFrom: $coordinates, distance: "50mi"}}}) {
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

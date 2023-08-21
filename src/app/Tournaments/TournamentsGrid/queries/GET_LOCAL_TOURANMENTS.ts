import { gql } from "@apollo/client";

export const GET_LOCAL_TOURNAMENTS = gql`
    query GetLocalTournaments($coordinates: String, $page: Int, $perPage: Int) {
        tournaments(query: { perPage: $perPage, page: $page, filter: {upcoming: true, location: {distanceFrom: $coordinates, distance: "50mi"}}}) {
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
import { Event } from "../../events/models/Event.type"

export type Tournament = {
    id: number,
    name: string,
    slug: string,
    isOnline: boolean,
    city?: string,
    addrState?: string,
    countryCode?: string,
    startAt: number,
    endAt: number,
    numAttendees: number,
    events: Event[]
    images?: {
            url?: string,
            type?: string
        }[]
}
export type Set = {
    nodes: {
        id: number,
        fullRoundText: string,
        identifier: string,
        state: number,
        startAt: number,
        completedAt: number,
        winnderId: number,
        slots: {
            id: number,
            entrant: {
                name: string,
                initialSeedNum: number
            }
        }[]
    }[]
}
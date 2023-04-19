import { Set } from './Set.type'

export type Phase = {
    id: number,
    name: string,
    state: string,
    bracketType: string,
    sets: Set;
}
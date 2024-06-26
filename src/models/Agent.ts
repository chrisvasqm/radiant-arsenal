export interface Agent {
    uuid: string
    displayName: string
    description: string
    displayIcon: string
    fullPortrait: string
    isPlayableCharacter: boolean
    role: { displayName: string }
    abilities: {
        displayName: string,
        description: string,
        displayIcon: string
    }[]
}
import { Platform } from "react-native";

export enum Colors {
    primary = '#1CD760',
    background = '#000',
    text = '#FFFFFF',
    backgroundDark = '#121212',
    backgroundLight = '#1F1F1F',
    inactive = '#B3B3B3'
}
export enum Fonts {
    Regular = 'Satoshi-Regular',
    Medium = 'Satoshi-Medium',
    Light = 'Satoshi-Light',
    Black = 'Satoshi-Black',
    Bold = 'Satoshi-Bold',
}

export const BOTTOM_TAB_HEIGHT = Platform.OS == 'ios' ? 90 : 70

export const darkenColor = (hex: string, amount = 100) => {
    let color = hex?.replace('#', '')
    if (color?.length === 3) {
        color = color?.split('')?.map(c => c + c)?.join('')
    }
    const num = parseInt(color, 16)
    const r = Math.max((num >> 16) - amount, 0)
    const g = Math.max(((num >> 8) & 0x00FF) - amount, 0)
    const b = Math.max((num & 0x0000FF) - amount, 0)
    return `#${(r << 16 | g << 8 | b)?.toString(16).padStart(6, '0')}`
}

export const convertTrack = (track: any) => {
    return {
        id: track.id,
        url: track.track_uri,
        title: track.title,
        artist: track.artist.name,
        artwork: track.artwork_uri,
    };
};
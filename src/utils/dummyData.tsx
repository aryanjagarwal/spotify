const honeySingh = {
    name: "Yo Yo Honey Singh",
    bio: 'Honey Singh, also known as Yo Yo Honey Singh, is a popular Indian rapper, music producer, and singer. He gained fame with his blend of Punjabi and Hindi music, delivering chart-topping hits like "Desi Kalakaar" and "Lungi Dance."',
    cover_uri: require('../assets/artist/honeysingh.jpg')
}

const swanlee = {
    name: "Swan Lee",
    bio: 'Swan Lee is a Danish indie rock band consisting of singer Pernille Rosendahl, guitarist Jonas Struck and drummer Emil Jørgensen.',
    cover_uri: require('../assets/artist/swanlee.jpg')
}

export const trackData = [
    {
        id: 1,
        title: "Millionaire",
        track_uri: require('../assets/tracks/millionaire/music.mp3'),
        artwork_uri: require('../assets/tracks/millionaire/artwork.jpg'),
        lyricist: "Leo Grewell",
        video_uri: require('../assets/tracks/millionaire/video.mp4'),
        artist: honeySingh,
        category: "happy"
    },
    {
        id: 2,
        title: "Brown Rang",
        track_uri: require('../assets/tracks/brownrang/music.mp3'),
        artwork_uri: require('../assets/tracks/brownrang/artwork.jpg'),
        lyricist: "Leo Grewell",
        artist: honeySingh,
        category: "neutral"
    },
    {
        id: 3,
        title: "Desi Kalakar",
        track_uri: require('../assets/tracks/desikalakar/music.mp3'),
        artwork_uri: require('../assets/tracks/desikalakar/artwork.jpg'),
        lyricist: "Leo Grewell",
        artist: honeySingh,
        category: "sad"
    },
    {
        id: 4,
        title: "Sunflower-Spider-Man:Into the Spider-Verse",
        track_uri: require('../assets/tracks/sunflower/music.mp3'),
        artwork_uri: require('../assets/tracks/sunflower/artwork.jpg'),
        lyricist: "Post Malone",
        artist: swanlee,
        video_uri: require('../assets/tracks/sunflower/video.mp4'),
        category: "sad"
    }
]


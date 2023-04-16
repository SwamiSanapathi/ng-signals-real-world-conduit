// {
//     "username": "Anah Benešová",
//     "bio": null,
//     "image": "https://api.realworld.io/images/demo-avatar.png",
//     "following": false
// }

export interface Profile {
    username: string,
    bio: string | null,
    image: string | null,
    following: boolean
}
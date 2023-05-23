// {"profile":{"username":"anilx3","bio":null,"image":"https://api.realworld.io/images/smiley-cyrus.jpeg","following":false}}

export interface UserProfile {
    username: string;
    bio: null | string;
    image: string;
    following: boolean;
    email?: string;
}

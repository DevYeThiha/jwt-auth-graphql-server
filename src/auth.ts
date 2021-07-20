import {User} from './entity/User';
import {sign} from 'jsonwebtoken'

export const createAccessToken = (user: User) => {
    const token =  sign({ userId: user.id}, process.env.ACCESS_TOKEN_SECRET!, {
        expiresIn: "15m"
    });
    return token;
};


export const createRefreshToken = (user: User) => {
    const token =  sign({ userId: user.id, tokenVersion: user.tokenVersion}, 
        process.env.REFRESH_TOKEN_SECRET!, {
        expiresIn: "7d"
    });
    return token;
};
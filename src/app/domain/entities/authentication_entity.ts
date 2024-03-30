import { UserGenreEnum } from "../helpers/enums/user_genre_enum";

export interface AuthenticationEntity {
    name?: string;
    email: string;
    phone?: string;
    age?: string;
    genre?: UserGenreEnum;
    password: string;
}
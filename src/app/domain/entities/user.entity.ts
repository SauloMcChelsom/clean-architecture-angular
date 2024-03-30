import { UserRoleEnum } from "../helpers/enums/user_role_enum";
import { UserTypeEnum } from "../helpers/enums/user_type_enum";

export interface UserEntity {
    uid: string;
    user_name: string;
    email: string;
    type: UserTypeEnum;
    roles: UserRoleEnum[];
    providers: string;
    is_active: boolean;
    timestamp: string;
}
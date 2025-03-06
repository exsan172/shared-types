export interface RequestDataUser {
    id    : number;
    name  : string;
    email : string;
}

export interface ResponseUser extends RequestDataUser {
    role : EnumUserRoles;
}

export interface RequestQueryUser {
    id: number;
}

export enum EnumUserRoles {
    ADMIN = "admin",
    USER  = "user",
    GUEST = "guest"
}
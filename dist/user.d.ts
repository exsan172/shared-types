export interface DataUser {
    id: number;
    name: string;
    email: string;
}
export interface ResponseUser extends DataUser {
    role: EnumUserRoles;
}
export interface RequestQueryUser {
    id: number;
}
export declare enum EnumUserRoles {
    ADMIN = "admin",
    USER = "user",
    GUEST = "guest"
}
//# sourceMappingURL=user.d.ts.map
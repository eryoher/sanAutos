export const ROLES = {
    ANY: "*",
    UNAUTHENTICATED: "_UNAUTHENTICATED",
    ADMIN: "Administrador",
    CLIENT: "Cliente",
    SALESMAN: "vendedor"
};

export const ROLE_TO_HOME_MAPPING = {
    [ROLES.ADMIN]: "/admin",
    [ROLES.CLIENT]: "/",
    [ROLES.SALESMAN]: "/catalog"
}
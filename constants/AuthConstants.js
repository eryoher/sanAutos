export const ROLES = {
    ANY: "*",
    UNAUTHENTICATED: "_UNAUTHENTICATED",
    ADMIN: "Administrador",
    CLIENT: "Cliente",
    COMPANY: "Empresas"
};

export const ROLE_TO_HOME_MAPPING = {
    [ROLES.ADMIN]: "/admin",
    [ROLES.CLIENT]: "/",
    [ROLES.COMPANY]: "/checkCodes"
}
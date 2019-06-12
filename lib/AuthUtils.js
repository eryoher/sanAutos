import { ROLES } from '../constants/AuthConstants';

export function getRolename(auth) {
    return auth && auth.user && auth.user.Role ? auth.user.Role.name : null;
}

export function isLoggedIn(auth) {
    // make sure that all user information is consistent (i.e.: the saved state matches what the app will need)    
    return auth.userId && auth.token && auth.user && auth.user.Role && auth.user.Role.name;
}

export function isRoleAllowed(auth, acl) {
    const rolename = getRolename(auth);
    return acl.indexOf(rolename) >= 0 || acl.indexOf(ROLES.ANY) >= 0 || !isLoggedIn(auth) && acl.indexOf(ROLES.UNAUTHENTICATED) >= 0;
}

export function getHomeForRole(rolename, mapping) {    
    return mapping[rolename] ? mapping[rolename] : mapping[ROLES.ANY];
}
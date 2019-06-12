import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'next/router'

import { ROLE_TO_HOME_MAPPING, ROLES } from '../../constants/AuthConstants'
import { isRoleAllowed, isLoggedIn, getHomeForRole, getRolename } from '../../lib/AuthUtils'

function redirectByRole(WrappedComponent, authorizedRoles, roleToHomeMapping) {

  class RedirectByRole extends React.Component {

    constructor(props) {
      super(props);            
      authorizedRoles = authorizedRoles ? authorizedRoles : [ROLES.ANY];
      roleToHomeMapping = roleToHomeMapping ? roleToHomeMapping : ROLE_TO_HOME_MAPPING;

      // if user is not allowed
      if(this.props.auth){
        if (!isRoleAllowed(this.props.auth, authorizedRoles)) {
          if (!isLoggedIn(this.props.auth)) {
            // If user is not signed in then redirect to login            
            this.props.router.push('/login');
          } else {
            // if the user is not allowed, to home page according to role
            this.props.router.push(getHomeForRole(getRolename(this.props.auth), roleToHomeMapping));
          }
        }
      }
    }

    render() {
      const access = isRoleAllowed(this.props.auth, authorizedRoles);                 
      return (
        <>
          {access && <WrappedComponent
            {...this.props}
          />}
        </>
      );
    }
  }

  const mapStateToProps = ({ auth }) => {
    return { auth };
  };

  return connect(mapStateToProps, null)(withRouter(RedirectByRole));
}

export default redirectByRole;
import React from 'react';
import {connect} from 'react-redux';
import {Route,Redirect} from 'react-router-dom';
export const GuestRoute = ({component: Component, token, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props =>
        token === null ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/", state: { from: props.location } }}
          />
        )
      }
    />
  );
}
const mapStateToProps = state => ({
  token: state.user.token
});
export default connect(mapStateToProps)(GuestRoute);
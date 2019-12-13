import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import { Api, AuthApi } from "../../services/api";

export function AuthPage({ code, dispatch }) {
  useEffect(() => {
    try {
      async function getUserToken() {
        const urlParams = new URLSearchParams(window.location.search);
        const clientCode = urlParams.get("code");
        const tokenAccess = await AuthApi.post(
          `login/oauth/access_token`,
          {
            client_id: process.env.REACT_APP_CLIENT_ID,
            client_secret: process.env.REACT_APP_CLIENT_SECRET,
            code: clientCode
          },
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            }
          }
        );
        const { access_token } = tokenAccess.data;
        dispatch({ type: "UPDATE_TOKEN", token: access_token});
        Api.get("user").then(response => {
          const { name, location, bio, avatar_url } = response.data;
          dispatch({
            type: "AUTH_LOGIN",
            info: {
              location,
              name,
              bio,
              avatar_url
            }
          });
        });
      }
      getUserToken();
    } catch (err) {}
  }, [dispatch]);
  
  return (
    <div>

    </div>
  )
};

export default connect(() => ({}))(AuthPage);

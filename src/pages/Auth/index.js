import React, {useEffect,useState} from 'react';
import {connect} from 'react-redux';
import Layout from '../../components/Layout';
import Content, { ContentHeader, ContentBody } from '../../components/Content';
import Button from '../../components/Button';
import Input from '../../components/Input';
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
            client_id: "51611dfc8c071d25f07b",
            client_secret: "53b788f1d24cdaefeb7117907eda1c1bfc82e1a5",
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
  
  return <h1>Aguarde um momento..</h1>
};

export default connect(() => ({}))(AuthPage);

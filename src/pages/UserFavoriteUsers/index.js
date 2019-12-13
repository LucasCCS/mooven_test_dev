import React from "react";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import {Row, Col} from "react-grid-system";
import Layout from '../../components/Layout';
import Content, {ContentHeader,ContentBody} from '../../components/Content';
import {
  User,
  Users,
  Body,
  Avatar,
  Username,
  Footer,
  Action
} from "../../components/Users";
import { Api } from "../../services/api";

function UserFavoriteUsersPage({ favoriteUsers, dispatch }) {
  return (
    <Layout>
      <Content>
        <ContentHeader>
          <strong>Meus usuários favoritos</strong>
        </ContentHeader>
        <ContentBody>
          {favoriteUsers.length > 0 ? (
            <Users>
              {favoriteUsers.map(user => (
                <User>
                  <Body>
                    <Avatar url={`${user.avatar_url}`} />
                    <Username>{user.login}</Username>
                  </Body>
                  <Footer>
                    <Action href={`/users/${user.login}`}>
                      Visualizar repositórios
                    </Action>
                  </Footer>
                </User>
              ))}
            </Users>
          ) : (
            ""
          )}
        </ContentBody>
      </Content>
    </Layout>
  );
};
const mapStateToProps = state => ({
  favoriteUsers: state.user.favoriteUsers
});
export default connect(mapStateToProps)(UserFavoriteUsersPage);
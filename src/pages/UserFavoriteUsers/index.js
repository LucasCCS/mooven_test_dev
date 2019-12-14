import React from "react";
import {connect} from "react-redux";
import Layout from '../../components/Layout';
import Content, {
  ContentHeader,
  ContentBody,
  ContentHeaderBack,
  ContentHeaderTitle,
} from "../../components/Content";
import {
  User,
  Users,
  Body,
  Avatar,
  Username,
  Footer,
  Action,
  Location,
  Bio,
  RemoveUser,
} from "../../components/Users";
import EmptyList from "../../components/EmptyList";

function UserFavoriteUsersPage({ favoriteUsers, dispatch }) {
  return (
    <Layout>
      <Content>
        <ContentHeader>
          <ContentHeaderBack />
          <ContentHeaderTitle>Meus usuários favoritos</ContentHeaderTitle>
        </ContentHeader>
        <ContentBody>
          {favoriteUsers.length > 0 ? (
            <Users>
              {favoriteUsers.map(user => (
                <User>
                  <Body>
                    <RemoveUser user={user} dispatch={dispatch} />
                    <Avatar url={`${user.avatar_url}`} />
                    <Username>{user.login}</Username>
                    {user.location && <Location>{user.location}</Location>}
                    {user.bio && <Bio>{user.bio}</Bio>}
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
            <EmptyList>
              Você não possui nenhum usuário em sua lista de favoritos.
            </EmptyList>
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
import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import Layout from '../../components/Layout';
import Content, {ContentHeader,ContentBody} from '../../components/Content';
import Loading from '../../components/Loading';
import {
  User,
  Users,
  Body,
  Avatar,
  Username,
  Footer,
  Action,
  FavoriteUser,
} from "../../components/Users";
import InputSearch from '../../components/SearchInput';
import EmptyList from '../../components/EmptyList';

import { Api } from "../../services/api";

function MainPage({ token, favoriteUsers, dispatch }) {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function searchUsers() {
      if (search.length >= 4) {
        setIsLoading(true);
        const response = await Api.get(`search/users?q=${search}+in:login`);
        const { items } = response.data;
        setResult(items);
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      }
    }
    searchUsers();
  }, [search]);
  return (
    <Layout>
      <Content>
        <ContentHeader>
          <InputSearch onChange={value => setSearch(value)} />
        </ContentHeader>
        <ContentBody>
          {isLoading ? (
            <Loading size={60} type="Oval" color="#EC6212" />
          ) : result.length > 0 ? (
            <Users>
              {result.map(user => (
                <User>
                  <Body>
                    <FavoriteUser
                      user={user}
                      dispatch={dispatch}
                      status={
                        favoriteUsers.filter(item => item.login === user.login)
                          .length > 0
                          ? "true"
                          : "false"
                      }
                    />
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
            <EmptyList>Você ainda não buscou um usuário.</EmptyList>
          )}
        </ContentBody>
      </Content>
    </Layout>
  );
};

const mapStateToProps = state => ({
  token: state.user.token,
  favoriteUsers: state.user.favoriteUsers
});

export default connect(mapStateToProps)(MainPage);
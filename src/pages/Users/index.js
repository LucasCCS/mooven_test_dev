import React, { useState, useEffect } from "react";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import {Row, Col} from "react-grid-system";
import Layout from '../../components/Layout';
import Loading from "../../components/Loading";
import Content, {
  ContentHeader,
  ContentBody,
  ContentHeaderBack,
  ContentHeaderTitle
} from "../../components/Content";
import {
  User,
  Avatar,
  Body,
  Username,
  Location,
  Bio,
  FavoriteUser,
} from "../../components/Users";
import {
  Repositories,
  Repository,
  Title,
  Description,
  FavoriteRepository,
  RepositoryAuthRequiredAlert,
} from "../../components/Repositories";
import { Api } from "../../services/api";

function UserPage({favoriteRepos, favoriteUsers, dispatch, token }) {
  const [user, setUser] = useState([]);
  const [isUserFavorited, setIsUserFavorited] = useState(false);
  const [repositories, setRepositories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { login } = useParams();

  useEffect(() => {
    async function getUser() {
      const response = await Api.get(`users/${login}`);
      setUser(response.data);
    }
    getUser();
  }, [login]);

  useEffect(() => {
    async function getUserRepositories() {
      const response = await Api.get(`users/${login}/repos`);
      setRepositories(response.data);
    }
    getUserRepositories();
  }, [login]);

  useEffect(() => {
    if (user) setIsLoading(false);
  }, [user]);

  useEffect(() => {
    favoriteUsers.filter(item => item.login === user.login).length > 0 ?
      setIsUserFavorited(true)
      : setIsUserFavorited(false);
  }, [user, favoriteUsers]);

  return (
    <Layout>
      <Content>
        <ContentHeader>
          <ContentHeaderBack />
          <ContentHeaderTitle>Repositórios de {login}</ContentHeaderTitle>
        </ContentHeader>
        <ContentBody>
          {isLoading ? (
            <Loading size={60} type="Oval" color="#EC6212" />
          ) : (
            <Row>
              <Col lg={3}>
                <User>
                  <Body>
                    {token !== null ? (
                      <FavoriteUser
                        user={user}
                        dispatch={dispatch}
                        onClick={() => {
                          setIsUserFavorited(!isUserFavorited);
                        }}
                        status={isUserFavorited}
                      />
                    ) : (
                      ""
                    )}
                    <Avatar url={`${user.avatar_url}`} />
                    <Username>{user.name}</Username>
                    <Location>{user.location}</Location>
                    <Bio>{user.bio}</Bio>
                  </Body>
                </User>
              </Col>
              <Col lg={9}>
                {repositories.length > 0 ? (
                  <Repositories>
                    {repositories.map(repo => (
                      <Repository key={repo.id}>
                        {token != null ? (
                          <FavoriteRepository
                            repo={repo}
                            dispatch={dispatch}
                            status={
                              favoriteRepos.filter(item => item.id === repo.id)
                                .length > 0
                                ? "true"
                                : "false"
                            }
                          />
                        ) : (
                          <RepositoryAuthRequiredAlert>
                            Entre para favoritar este repositório
                          </RepositoryAuthRequiredAlert>
                        )}

                        <Title>{repo.full_name}</Title>
                        <Description>{repo.description}</Description>
                      </Repository>
                    ))}
                  </Repositories>
                ) : (
                  ""
                )}
              </Col>
            </Row>
          )}
        </ContentBody>
      </Content>
    </Layout>
  );
};
const mapStateToProps = state => ({
  token: state.user.token,
  favoriteRepos: state.user.favoriteRepositories,
  favoriteUsers: state.user.favoriteUsers,
});
export default connect(mapStateToProps)(UserPage);
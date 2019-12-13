import React, { useState, useEffect } from "react";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import {Row, Col} from "react-grid-system";
import Layout from '../../components/Layout';
import Content, {ContentHeader,ContentBody} from '../../components/Content';
import {
    User,
    Users,
    Avatar, 
    Body, 
    Username, 
    Location,
    Bio,
    Footer,
    Action,
  } 
from '../../components/Users';
import { Repositories, Repository, Title, Description } from '../../components/Repositories';
import {Tag, Tags} from '../../components/Tags';
import { Api } from "../../services/api";

function UserPage({favoriteRepos, dispatch }) {
  const [user, setUser] = useState([]);
  const [repositories, setRepositories] = useState([]);
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
  
  function handlerAddRepoFavorite(repo) {
    
    dispatch({
      type: "UPDATE_FAVORITE_REPOS",
      repo
    });
  }

  function handlerAddUserFavorite() {
      dispatch({
        type: "UPDATE_FAVORITE_USERS",
        user
      });
  }

  return (
    <Layout>
      <Content>
        <ContentHeader>
          <strong>Repositórios de {login}</strong>
        </ContentHeader>
        <ContentBody>
          <Row>
            <Col lg={3}>
              <User>
                <Body>
                  <Avatar url={`${user.avatar_url}`} />
                  <Username>{user.name}</Username>
                  <Location>{user.location}</Location>
                  <Bio>{user.bio}</Bio>
                </Body>
                <button onClick={() => handlerAddUserFavorite()}>
                  Favoritar
                </button>
              </User>
            </Col>
            <Col lg={9}>
              {repositories.length > 0 ? (
                <Repositories>
                  {repositories.map(repo => (
                    <Repository>
                      <Title>{repo.full_name}</Title>
                      <Description>{repo.description}</Description>
                      <button onClick={() => handlerAddRepoFavorite(repo)}>
                        Favoritar
                      </button>
                    </Repository>
                  ))}
                </Repositories>
              ) : (
                ""
              )}
            </Col>
          </Row>
        </ContentBody>
      </Content>
    </Layout>
  );
};
const mapStateToProps = state => ({
  favoriteRepos: state.user.favoriteRepositories
});
export default connect(mapStateToProps)(UserPage);
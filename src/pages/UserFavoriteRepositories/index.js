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
  Repositories,
  Repository,
  Title,
  Description,
  RemoveRepository,
} from "../../components/Repositories";
import EmptyList from "../../components/EmptyList";

function UserFavoriteRepositoriesPage({ favoriteRepos, dispatch }) {

  return (
    <Layout>
      <Content>
        <ContentHeader>
          <ContentHeaderBack />
          <ContentHeaderTitle>Meus repositórios favoritos</ContentHeaderTitle>
        </ContentHeader>
        <ContentBody>
          {favoriteRepos.length > 0 ? (
            <Repositories>
              {favoriteRepos.map(repo => (
                <Repository key={repo.id}>
                  <RemoveRepository
                    repo={repo}
                    dispatch={dispatch}
                    status={
                      favoriteRepos.filter(item => item.id === repo.id).length >
                      0
                        ? "true"
                        : "false"
                    }
                  />
                  <Title>{repo.full_name}</Title>
                  <Description>{repo.description}</Description>
                </Repository>
              ))}
            </Repositories>
          ) : (
            <EmptyList>
              Você não possui nenhum repositório em sua lista de favoritos.
            </EmptyList>
          )}
        </ContentBody>
      </Content>
    </Layout>
  );
};
const mapStateToProps = state => ({
  favoriteRepos: state.user.favoriteRepositories
});
export default connect(mapStateToProps)(UserFavoriteRepositoriesPage);
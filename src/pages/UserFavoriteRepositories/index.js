import React from "react";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import {Row, Col} from "react-grid-system";
import Layout from '../../components/Layout';
import Content, {ContentHeader,ContentBody} from '../../components/Content';
import { Repositories, Repository, Title, Description } from '../../components/Repositories';
import { Api } from "../../services/api";

function UserFavoriteRepositoriesPage({ favoriteRepos, dispatch }) {

  return (
    <Layout>
      <Content>
        <ContentHeader>
          <strong>Meus repositórios favoritos</strong>
        </ContentHeader>
        <ContentBody>
          {favoriteRepos.length > 0 ? (
            <Repositories>
              {favoriteRepos.map(repo => (
                <Repository>
                  <Title>{repo.full_name}</Title>
                  <Description>{repo.description}</Description>
                  <button>Favoritar</button>
                </Repository>
              ))}
            </Repositories>
          ) : (
            ""
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
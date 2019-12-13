import React from 'react';
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
import InputSearch from '../../components/SearchInput';
export default function MainPage() {
  return (
    <Layout>
      <Content>
        <ContentHeader>
          <InputSearch />
        </ContentHeader>
        <ContentBody>
          {/* <Users>
            <User>
              <Body>
                <Avatar />
                <Username>Lucas Costa</Username>
                <Location>Guaruhos - SP</Location>
                <Bio>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Bio>
              </Body>
              <Footer>
                <Action>Visualizar repositórios</Action>
              </Footer>
            </User>
          </Users> */}
          <Repositories>
            <Repository>
              <Title>mojombo/30daysoflaptops.github.io</Title>
              <Description>The personal website of Ben Balter. Built using Jekyll and GitHub Pages. See humans.txt for more infos."</Description>
              <Tags>
                <Tag className="php">PHP</Tag>
                <Tag>Javascript</Tag>
              </Tags>
            </Repository>
          </Repositories>
        </ContentBody>
      </Content>
    </Layout>
  );
};

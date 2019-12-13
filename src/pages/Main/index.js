import React from 'react';
import Layout from '../../components/Layout';
import Content, {ContentHeader,ContentBody} from '../../components/Content';
import User, 
  { 
    Users,
    Avatar, 
    Body, 
    Username, 
    Location,
    Bio,
  } 
from '../../components/Users';
import InputSearch from '../../components/SearchInput';
export default function MainPage() {
  return (
    <Layout>
      <Content>
        <ContentHeader>
          <InputSearch />
        </ContentHeader>
        <ContentBody>
          <Users>
            <User>
              <Body>
                <Avatar />
                <Username>Lucas Costa</Username>
                <Location>Guaruhos - SP</Location>
                <Bio>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Bio>
              </Body>
            </User>
          </Users>
        </ContentBody>
      </Content>
    </Layout>
  );
};

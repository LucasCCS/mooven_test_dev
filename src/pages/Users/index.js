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
import { Api } from "../../services/api";

export default function UserPage() {
  
  return (
    <Layout>
      <Content>
        <ContentHeader>
          
        </ContentHeader>
        <ContentBody>
          
        </ContentBody>
      </Content>
    </Layout>
  );
};

import React from 'react';
import Layout from '../../components/Layout';
import Content,{ContentHeader,ContentBody} from '../../components/Content';
export default function MainPage() {
  return (
    <Layout>
      <Content>
        <ContentHeader />
        <ContentBody />
      </Content>
    </Layout>
  );
};

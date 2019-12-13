import React from 'react';
import Layout from '../../components/Layout';
import Content, { ContentHeader, ContentBody } from '../../components/Content';
import Button from '../../components/Button';
import Input from '../../components/Input';
export default function LoginPage() {
  return (
    <Layout size={4}>
      <Content>
        <ContentHeader>
          <span>Entrar</span>
        </ContentHeader>
        <ContentBody>
          <Input 
            type="text"
            placeholder="Usuário Github"
            onChange={(value) => console.log(value)}
          />
          <Button color="primary" size="lg">
            Acessar
          </Button>
        </ContentBody>
      </Content>
    </Layout>
  );
};

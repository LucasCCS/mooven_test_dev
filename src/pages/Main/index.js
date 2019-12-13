import React, {useState, useEffect} from 'react';
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
import InputSearch from '../../components/SearchInput';
import { Api, CancelToken } from "../../services/api";

export default function MainPage() {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState([]);
  let cancel;
  useEffect(() => {
    async function searchUsers() {
      if (search.length >= 4) {
        try {
          cancel();
        } catch (err) {
          const response = await Api.get(`search/users?q=${search}`, {
            cancelToken: new CancelToken(function executor(c) {
              // An executor function receives a cancel function as a parameter
              cancel = c;
            })
          });
          const { items } = response.data;
          setResult(items);
        }
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
          {result.length > 0 ? (
            <Users>
              {result.map(user => (
                <User>
                  <Body>
                    {/* <Avatar url={`${user.avatar_url}`} /> */}
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
            ""
          )}
        </ContentBody>
      </Content>
    </Layout>
  );
};

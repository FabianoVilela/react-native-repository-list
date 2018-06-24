import React, { Component } from 'react'
// import {
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native'
import { 
  Button,
  Body,
  Container,
  Content,
  Form,
  Header,
  Item,
  Input,
  Spinner,
  Text,
  Title,
  Icon,
} from 'native-base'

import RepoList from './RepoList'

type Props = {};
export default class App extends Component<Props> {
  state = {
    search: '',
    repositories: [],
    loading: false,
  }

  fetchRepositories = async () => {
    if(this.state.search.length > 0) {
      this.setState({ loading: true })
      const response = await fetch(`https://api.github.com/search/repositories?q=${this.state.search}`)
      const repositories = await response.json()
  
      this.setState({
        repositories: repositories.items,
        loading: false,
      })
  
    }
  }

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Github explorer</Title>
          </Body>
        </Header>
        <Content padder>
          <Form>
            <Item last>
              <Icon active name='search' />
              <Input 
                placeholder="Buscar palavra chave" 
                value={this.state.search} 
                onChangeText={text => this.setState({ search: text })} />
            </Item>
          </Form>
          <Button block style={{marginTop: 10}}
            onPress={this.fetchRepositories}>
            <Text>Buscar</Text>
          </Button>
          { this.state.loading ? <Spinner color="#999" /> : <RepoList repositories={this.state.repositories}/>
            
          }
        </Content>
      </Container>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
// })

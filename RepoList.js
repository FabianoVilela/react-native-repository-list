import React from 'react'
import { 
  List,
  ListItem,
  Left,
  Thumbnail,
  Right,
  Body,
  Text,
} from 'native-base';


const RepoList = (props) => (
  <List style={{marginTop: 10}}>
      { props.repositories.map(r => (
        <ListItem key={r.id} avatar>
          <Left>
            <Thumbnail source={{uri: r.owner.avatar_url}} />
          </Left>
          <Body>
            <Text>{r.full_name}</Text>
            <Text note>{r.description}</Text>
          </Body>
          <Right>
            <Text>{r.stargazers_count} starts</Text>
          </Right>
        </ListItem>
      )
    )}
  </List>
)

export default RepoList
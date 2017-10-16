import React from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';


const Movie = () => {
  return (
      <Container>
        <Header />
        <Content>
          <List>
            <ListItem itemDivider>
              <Text>A</Text>
            </ListItem>
            <ListItem >
              <Text>yang</Text>
            </ListItem>
            <ListItem>
              <Text>xiang</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>B</Text>
            </ListItem>
            <ListItem>
              <Text>Bradley Horowitz</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
  )
};

export default Movie;

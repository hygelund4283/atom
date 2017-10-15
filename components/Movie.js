import React from 'react';
import { Container, Header, Content, Badge, Text } from 'native-base';

const Movie = () => {
  return (
      <Container>
        <Header />
        <Content>
          <Badge>
            <Text>2</Text>
          </Badge>
          <Badge primary>
            <Text>2</Text>
          </Badge>
          <Badge success>
            <Text>2</Text>
          </Badge>
          <Badge info>
            <Text>2</Text>
          </Badge>
          <Badge warning>
            <Text>2</Text>
          </Badge>
          <Badge danger>
            <Text>2</Text>
          </Badge>
          
          <Badge style={{ backgroundColor: 'black' }}>
            <Text style={{ color: 'white' }}>1866</Text>
          </Badge>
        </Content>
      </Container>
  )
};

export default Movie;

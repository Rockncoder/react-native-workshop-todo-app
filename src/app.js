import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {Container, Header, Content, Card, CardItem, Text, Body} from 'native-base';


class App extends Component {
  render() {
    return (
      <Container>
        <Header/>
        <Content>
          <Card>
            <CardItem header>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem>
              <Body>
              <Text>
                //Your text here
              </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

AppRegistry.registerComponent('todo', () => App);
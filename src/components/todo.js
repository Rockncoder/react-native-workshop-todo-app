import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Container, Header, Content, Footer, Input, List, Button, Icon} from 'native-base';
import {View, Text} from 'react-native';
import TodoItem from './todo-item';

export default class Todo extends Component {

  static propTypes = {
    removeTodo: PropTypes.func,
    setVisibilityFilter: PropTypes.func,
    toggleTodo: PropTypes.func,
    todos: PropTypes.array.isRequired,
    displayType: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {inputText: '', displayType: 'all'};
  }

  onSubmit() {
    if (this.state.inputText) {
      this.props.addTodo(this.state.inputText);
      this.setState({
        inputText: ''
      });
    }
  }

  remove(id) {
    this.props.removeTodo(id);
  }

  toggle(id) {
    this.props.toggleTodo(id);
  }

  renderTodoList() {
    switch (this.props.displayType) {
      case 'all':
        return this.props.todos.map((item, index) =>
          <TodoItem
            toggle={() => this.toggle(index)}
            remove={() => this.remove(index)}
            item={item}
            key={index}
          />
        );
      case 'completed':
        const completed = this.props.todos.filter(item => item.completed);
        if (completed.length) {
          return completed.map((item, index) =>
            <TodoItem
              toggle={() => this.toggle(index)}
              remove={() => this.remove(index)}
              item={item}
              key={index}
            />
          );
        }
        return null;
      case 'active':
        const active = this.props.todos.filter(item => !item.completed);
        if (active.length) {
          return active.map((item, index) =>
            <TodoItem
              toggle={() => this.toggle(index)}
              remove={() => this.remove(index)}
              item={item}
              key={index}
            />
          );
        }
        return null;
      default:
        return <View><Text>No Completed Data</Text></View>;
    }
  }

  render() {
    return (
      <Container>
        <Header>
          <Content>
            <Input style={{backgroundColor: '#ffffff'}}
                   placeholder="Task"
                   value={this.state.inputText}
                   onChangeText={inputText => this.setState({inputText})}
                   onSubmitEditing={() => this.onSubmit()}
                   maxLength={35}
            />
          </Content>
        </Header>
        <Content>
          <View>
            <List>
              {this.renderTodoList()}
            </List>

            {!!this.props.todos.length &&
            <View>
              <Button
                transparent
                bordered={this.props.displayType === 'all'}
                onPress={() => this.props.setVisibilityFilter('all')}>
                <Text>All</Text>
              </Button>

              <Button
                transparent
                bordered={this.props.displayType === 'completed'}
                onPress={() => this.props.setVisibilityFilter('completed')}>
                <Text>Completed</Text>
              </Button>

              <Button
                transparent
                bordered={this.props.displayType === 'active'}
                onPress={() => this.props.setVisibilityFilter('active')}>
                <Text>Active</Text>
              </Button>
            </View>}
          </View>
        </Content>
        <Footer>

        </Footer>
      </Container>
    );
  }
}
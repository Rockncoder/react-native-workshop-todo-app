import React from 'react';
import PropTypes from 'prop-types';
import {Text, Icon, ListItem, CheckBox, Body, Left, Right} from 'native-base';

const TodoItem = ({toggle, remove, item}) => (
  <ListItem style={{flexDirection: "row", flex: 1}}>

    <Left>
      <CheckBox onPress={toggle} checked={item.completed}/>
    </Left>
    <Body>
    <Text>
      {item.text}
    </Text>
    </Body>
    <Right>
      <Icon name="md-trash" style={{color: '#000000'}} onPress={remove}/>
    </Right>
  </ListItem>
);

TodoItem.propTypes = {
  toggle: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

export default TodoItem;
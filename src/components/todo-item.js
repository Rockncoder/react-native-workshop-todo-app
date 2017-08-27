import React from 'react';
import PropTypes from 'prop-types';
import {Text, Icon, ListItem, CheckBox} from 'native-base';

const TodoItem = ({toggle, remove, item }) => (
  <ListItem>
    <CheckBox onPress={toggle} checked={item.completed} />
    <Text>
      {item.text}
    </Text>
    <Icon name="md-trash" style={{color: '#000000'}} onPress={remove} />
  </ListItem>
);

TodoItem.propTypes = {
  toggle: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

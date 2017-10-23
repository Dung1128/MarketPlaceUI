import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default class extends Component {
  static propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    textSize: PropTypes.number,
    textColor: PropTypes.string
  };
  render() {
    const { text, onPress, textSize, textColor, ...props } = this.props;
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={styles.button} {...props}>
        <Text style={{ fontSize: textSize, color: textColor }}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

import React, { Component } from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default class extends Component {
  static propTypes = {
    hint: PropTypes.string,
    keyboard: PropTypes.string,
    pass: PropTypes.bool
  };

  render() {
    const { hint, keyboard, pass, ...props } = this.props;
    return (
      <TextInput
        underlineColorAndroid="transparent"
        placeholder={hint}
        secureTextEntry={pass}
        style={styles.input}
        keyboardType={keyboard}
        {...props}
      />
    );
  }
}

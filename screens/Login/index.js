import React from 'react';
import { Container, View } from 'native-base';
import {
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Animated,
  TouchableOpacity,
  Alert,
  LayoutAnimation,
  Platform,
  NativeModules,
  Image,
  UIManager
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import material from '../../theme/variables/material';

// const { UIManager } = NativeModules;

// UIManager.setLayoutAnimationEnabledExperimental &&
//   UIManager.setLayoutAnimationEnabledExperimental(true);

class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
    this.state = {
      check: false,
      x: 120,
      y: 75
    };

    this.updateKeyboardSpace = () => {
      LayoutAnimation.spring();
      this.setState({
        x: 100,
        y: 30
      });
    };
    this.resetKeyboardSpace = () => {
      LayoutAnimation.spring();
      this.setState({
        x: 120,
        y: 75
      });
    };
  }

  componentWillMount() {
    if (material.platform === 'ios') {
      this.keyboardDidShowListener = Keyboard.addListener(
        'keyboardDidShow',
        this.updateKeyboardSpace
      );
      this.keyboardDidHideListener = Keyboard.addListener(
        'keyboardDidHide',
        this.resetKeyboardSpace
      );
    }
  }
  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }
  keyboardDidShow = () => {};
  keyboardDidHide = () => {};
  forgotPass() {
    Alert.alert(
      'Forgot Password',
      '.',
      [
        {
          text: 'Cancle',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'Ok' }
      ],
      { cancelable: false }
    );
  }

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <KeyboardAwareScrollView>
          <Container style={styles.container}>
            <Image
              style={{
                width: this.state.x,
                height: this.state.x,
                marginVertical: this.state.y
              }}
              source={{
                uri:
                  'https://netdna.webdesignerdepot.com/uploads/circular_logos/Accelrys.jpg'
              }}
            />
            <View style={styles.content}>
              <View style={styles.viewInput}>
                <Input hint="Account" style={styles.input} />
              </View>
              <View style={styles.viewInput}>
                <Input style={styles.input} hint="Password" pass />
              </View>
              <View style={styles.viewForgotPass}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => this.forgotPass()}
                >
                  <Text style={styles.forgotPass}>Forgot password</Text>
                </TouchableOpacity>
              </View>
              <Button
                textSize={18}
                textColor={'#fff'}
                text="Login"
                style={styles.btnLogin}
              />
              <View style={{ ...styles.viewForgotPass, paddingHorizontal: 50 }}>
                <TouchableOpacity activeOpacity={0.7}>
                  <Text style={styles.forgotPass}>Register</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Container>
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
    );
  }
}

export default Login;

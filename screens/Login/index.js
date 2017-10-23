import React from 'react';
import { connect } from 'react-redux';
import { Container, View, CheckBox } from 'native-base';
import {
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Animated,
  TouchableOpacity,
  Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';

class Login extends React.PureComponent {
  static navigationOption = {
    title: 'none'
  };
  constructor(props) {
    super(props);
    this.state = {
      checkFlex: new Animated.Value(1),
      check: false
    };
  }

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this.keyboardDidShow
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this.keyboardDidHide
    );
  }
  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }
  keyboardDidShow = () => {};
  keyboardDidHide = () => {};
  forgotPass() {
    Alert.alert(
      'Gọi điện',
      'Để nhận mật khẩu bạn vui lòng gọi điện đến Hotline của H4US để xác nhận tài khoản và lấy mật khẩu mới.',
      [
        {
          text: 'Hủy',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'Đồng ý' }
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
            <View style={styles.logo}>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: 'bold'
                }}
              >
                Market Place
              </Text>
            </View>
            <View style={styles.content}>
              <View style={styles.viewInput}>
                <Input hint="Account" keyboard="numeric" style={styles.input} />
              </View>
              <View style={styles.viewInput}>
                <Input style={styles.input} hint="Password" pass />
              </View>
              <View style={styles.viewForgotPass}>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row'
                  }}
                  activeOpacity={0.7}
                >
                  <CheckBox
                    color={'#4C70BA'}
                    activeOpacity={0.7}
                    checked={this.state.check}
                    onPress={() => this.setState({ check: !this.state.check })}
                  />

                  <Text style={{ ...styles.forgotPass, marginLeft: 15 }}>
                    Save password
                  </Text>
                </TouchableOpacity>
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
              <View style={styles.viewForgotPass}>
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

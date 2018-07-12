import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  PixelRatio,
  Image,
  TextInput,
  TouchableWithoutFeedback
} from 'react-native'
import { Actions } from 'react-native-router-flux';
import { Toast} from 'antd-mobile-rn'
import Button from 'react-native-button';

const deviceWidth = Dimensions.get('window').width;      //设备的宽度
const deviceHeight = Dimensions.get('window').height
type Props = {};
class Login extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }
  onLogin = () => {
    // const username = this.state.username
    Toast.success('登录成功', 1);

  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../../public/image/login_bgc.png')}
          style={[
            styles.absoluteFillObject,
            {
              width: deviceWidth,
              height: deviceHeight
            }
          ]}
        />
        <View style={styles.loginWrap}>
          <View style={styles.loginTop}>
            <Text style={styles.signTitle}>
              <Button style={styles.resButton} onPress={Actions.register}>注册</Button>
            </Text>
            <Text style={styles.loginTitle}>
              登录
            </Text>
            <Text style={styles.loginSpan}>
              Login
            </Text>
          </View>
          <View style={styles.loginForm}>
            <View style={styles.loginInput}>
                <TextInput
                  style={{position: 'relative', height: 55, borderColor: '#e2e2e2', borderBottomWidth: 1, paddingLeft: 57}}
                  onChangeText={(username) => this.setState({username})}
                  value={this.state.username}
                  placeholder='请输入账号名或手机号码'
                  selectTextOnFocus
                  selectionColor='#5d81f5'
                />
                <Image
                  source={require('../../../public/image/username_icon.png')}
                  style={styles.userIcon}
                  />
                <TextInput
                  style={{position: 'relative', height: 55, borderColor: '#e2e2e2', borderBottomWidth: 1, paddingLeft: 57}}
                  onChangeText={(password) => this.setState({password})}
                  value={this.state.password}
                  placeholder='请输入密码'
                  secureTextEntry={true}
                  selectTextOnFocus
                  selectionColor='#5d81f5'
                />
                <Image
                  source={require('../../../public/image/password_icon.png')}
                  style={styles.passwordIcon}
                  />
            </View>
            <View>
              <Text style={styles.forgetText}>
                <Button style={styles.forgetButton} onPress={Actions.forget}>忘记密码</Button>
              </Text>
            </View>
            <View style={styles.loginBtn}>
              <TouchableWithoutFeedback
                onPress={this.onLogin}
                delayLongPress={5000}>
                <View style={styles.button}>
                  <Image
                    source={require('../../../public/image/login_btn.png')}
                    style={[
                      styles.absoluteFillObject,
                      {
                        width: 240,
                        height: 43
                      }
                    ]}
                  />
                    <Text style={styles.buttonText}>
                      登 录
                    </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default Login
const styles = StyleSheet.create({
  container: {
    paddingTop: 22
  },
  absoluteFillObject : {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  loginWrap: {
    flexDirection: 'column',
    padding: 27
  },
  loginTop : {
    flexDirection: 'column',
    position: 'relative',
  },
  signTitle: {
    position: 'absolute',
    top: 0,
    right: 27,
    fontSize : 14
  },
  resButton: {
    color: '#fefefe'
  },
  loginTitle: {
    marginTop: 28,
    marginBottom: 8,
    color: '#fefefe',
    fontSize: 23,
    textAlign: 'center',
    fontWeight: '600'
  },
  loginSpan: {
    color: '#fefefe',
    fontSize: 12,
    textAlign: 'center'
  },
  // 表单
  loginForm: {
    flexDirection: 'column',
    marginTop: 190
  },
  loginInput: {
    flexDirection: 'column'
  },
  userIcon: {
    width: 20,
    height: 20,
    position: 'absolute',
    top:15,
    left: 10
  },
  passwordIcon: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: 70,
    left: 10
  },
  forgetText: {
    marginTop: 11,
    marginRight: 21,
    textAlign: 'right',
    alignSelf: 'flex-end'
  },
  forgetButton: {
    color: '#7a83fd'
  },
  loginBtn: {
    marginTop: 37,
    alignSelf: 'center'
  },
  button: {
    width: 240,
    height: 43
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    lineHeight: 43
  }
})

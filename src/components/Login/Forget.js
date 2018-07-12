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
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import { Checkbox, Toast } from 'antd-mobile-rn'
const deviceWidth = Dimensions.get('window').width;      //设备的宽度
const deviceHeight = Dimensions.get('window').height

class Forget extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      yzm: ''
    }
  }
  onResetting = () => {
    // const username = this.state.username
    Toast.success('重置密码成功', 1);

  }
  render () {
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
              <Button style={styles.resButton} onPress={Actions.login}>登录</Button>
            </Text>
            <Text style={styles.loginTitle}>
              忘记密码
            </Text>
            <Text style={styles.loginSpan}>
              Forget Password
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
                  onChangeText={(yzm) => this.setState({yzm})}
                  value={this.state.yzm}
                  placeholder='请输入验证码（必填项）'
                  selectTextOnFocus
                  selectionColor='#5d81f5'
                />
                <Image
                  source={require('../../../public/image/yzm_icon.png')}
                  style={styles.yzmIcon}
                  />
                <View style={styles.yzmWrap}>
                  <Button style={styles.yzmBtn}>
                    获取验证码
                  </Button>
                </View>
            </View>
            <View style={styles.loginBtn}>
              <TouchableWithoutFeedback
                onPress={this.onResetting}
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
                      重置密码
                    </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Forget

const styles = StyleSheet.create({
  container: {
    paddingTop: 22,
    flex: 1
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
  yzmIcon: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: 70,
    left: 10
  },
  // 验证码btn
  yzmWrap: {
    position: 'absolute',
    bottom: 10,
    right: 0,
  },
  yzmBtn: {
    borderColor: '#7885fd',
    borderWidth: 1,
    color: '#7885fd',
    textAlign: 'center',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 6
  },
  forgetText: {
    color: '#7a83fd',
    marginTop: 11,
    marginRight: 21,
    textAlign: 'right'
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

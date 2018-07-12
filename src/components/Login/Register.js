import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TextInput,
  TouchableWithoutFeedback
} from 'react-native'
import { Actions } from 'react-native-router-flux';
import { Checkbox, Toast, Modal } from 'antd-mobile-rn'

import Button from 'react-native-button';
type Props = {};
class Register extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      phone: '',
      yzm: '',
      checkBox: true,
      visible: false //模态框状态
    }
  }
  // 注册
  onRegister = () => {
    // Toast.success('注册成功', 1, null, false);
    const { visible } = this.state
    this.setState({
      visible: true
    })
  }
  // 关闭模态框
  onClose = () => {
    this.setState({
      visible: false
    })
  }
  // 返回首页
  onReturn = () => {
    this.setState({
      visible: false
    })
    Actions.home('home')
  }
  render () {
    const deviceWidth = Dimensions.get('window').width;      //设备的宽度
    const deviceHeight = Dimensions.get('window').height
    const AgreeItem = Checkbox.AgreeItem
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
              注册
            </Text>
            <Text style={styles.loginSpan}>
              register
            </Text>
          </View>
          <View style={styles.loginForm}>
            <View style={styles.loginInput}>
                <TextInput
                  style={{position: 'relative', height: 55, borderColor: '#e2e2e2', borderBottomWidth: 1, paddingLeft: 57}}
                  onChangeText={(username) => this.setState({username})}
                  value={this.state.username}
                  placeholder='纯字母或数字（必填项）'
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
                  placeholder='请输入您的登录密码（必填项）'
                  secureTextEntry={true}
                  selectTextOnFocus
                  selectionColor='#5d81f5'
                />
                <Image
                  source={require('../../../public/image/password_icon.png')}
                  style={styles.passwordIcon}
                  />
                <TextInput
                  style={{position: 'relative', height: 55, borderColor: '#e2e2e2', borderBottomWidth: 1, paddingLeft: 57}}
                  onChangeText={(phone) => this.setState({phone})}
                  value={this.state.phone}
                  placeholder='请输入手机号码（必填项）'
                  selectTextOnFocus
                  selectionColor='#5d81f5'
                />
                <Image
                  source={require('../../../public/image/phone_icon.png')}
                  style={styles.phoneIcon}
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
            <View style={styles.checkBox}>
              <AgreeItem
                checked={this.state.checkBox}
                checkboxStyle={{ tintColor: '#7885fd' }}
                onChange={(event: any) => {
                  this.setState({ checkBox: event.target.checked });
                }}
              >
                <Text style={{color: '#7885fd'}}>阅读并同意</Text>幸福开发区使用协议
              </AgreeItem>
            </View>
            <View style={styles.loginBtn}>
              <TouchableWithoutFeedback
                onPress={this.onRegister}
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
                      注 册
                    </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
        // 模态框
        <Modal
          transparent
          onClose={this.onClose}
          maskClosable
          visible={this.state.visible}
          style={styles.modal}
        >
          <Image
            source={require('../../../public/image/register_success_03.png')}
            style={[
              styles.absoluteFillObject,
              {
                width: 255,
                height: 289
              }
            ]}
            />
          <View style={{ paddingVertical: 181 }}>
            <Text style={{ textAlign: 'center' }}>恭喜您，注册成功</Text>
            <TouchableWithoutFeedback
                onPress={this.onReturn}
                delayLongPress={5000}>
                <View style={styles.returnButton}>
                  <Image
                    source={require('../../../public/image/login_btn.png')}
                    style={[
                      styles.absoluteFillObject,
                      {
                        width: 168,
                        height: 43,
                        borderRadius: 15
                      }
                    ]}
                  />
                    <Text style={styles.buttonText}>
                      返回主页
                    </Text>
                </View>
            </TouchableWithoutFeedback>
          </View>
        </Modal>
      </View>
    )
  }
}

export default Register

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
    marginTop: 116
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
  phoneIcon: {
    width: 20,
    height: 24,
    position: 'absolute',
    top: 125,
    left: 10
  },
  yzmIcon: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: 180,
    left: 10
  },
  forgetText: {
    color: '#7a83fd',
    marginTop: 11,
    marginRight: 21,
    textAlign: 'right'
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
  checkBox: {
    marginTop: 13
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
  },
  modal: {
    width: 255,
    height: 289,
    paddingTop:0
  },
  returnButton: {
    width: 168,
    height: 43,
    alignSelf: 'center',
    marginTop: 31
  }
})

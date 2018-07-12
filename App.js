
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  Scene,
  Router,
  Actions,
  Reducer,
  ActionConst,
  Overlay,
  Tabs,
  Modal,
  Drawer,
  Stack,
  Lightbox
} from 'react-native-router-flux';
import SplashScreen from './src/components/SplashScreen'
import Login from './src/components/Login/Login'
import Register from './src/components/Login/Register'
import Forget from './src/components/Login/Forget'
import Home from './src/components/Home/Home'
import Sys from './src/components/Pages/Sys'

const prefix = Platform.OS === 'android' ? 'mychat://mychat/' : 'mychat://';
type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      show: true
    }
  }
  componentDidMount() {
      const { show } = this.state
      setTimeout(()=> {
        SplashScreen.hide
      },2000)
      this.setState({
        show: false
      })
  }
  render() {
    const reducerCreate = params => {
      const defaultReducer = new Reducer(params)
        return (state, action) => {
          console.log('ACTION:', action);
          return defaultReducer(state, action)
      }
  }
    return (
      <View style={styles.container}>
        {
          this.state.show ? <SplashScreen /> :
          <Router
            createReducer={reducerCreate}
            >
            <Stack key="/" path="/">
              <Scene
                hideNavBar
                key="home"
                component={Home}
              />
              <Scene
                hideNavBar
                key="login"
                component={Login}
              />
              <Scene
                hideNavBar
                key="register"
                component={Register}
              />
              <Scene
                hideNavBar
                key="forget"
                component={Forget}
              />
              <Scene
                hideNavBar
                key="sys"
                component={Sys}
              />
            </Stack>
          </Router>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});

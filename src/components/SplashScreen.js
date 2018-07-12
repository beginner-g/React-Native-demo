
import React, { Component } from 'react';
import {
  Platform,
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const prefix = Platform.OS === 'android' ? 'mychat://mychat/' : 'mychat://';
type Props = {};
export default class SplashScreen extends Component<Props> {
  render() {
    const deviceWidth = Dimensions.get('window').width;      //设备的宽度
    const deviceHeight = Dimensions.get('window').height
    return (
      <View style={styles.container}>
        <Image
          source={require('../../public/image/startPages.png')}
          style={[
            styles.absoluteFillObject,
            {
              width: deviceWidth,
              height: deviceHeight
            }
          ]}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  absoluteFillObject : {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  }
});

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  TextInput,
  TouchableHighlight
} from 'react-native'
import { Actions } from 'react-native-router-flux';
import { Toast, Grid } from 'antd-mobile-rn'
import Button from 'react-native-button';
import Swiper from 'react-native-swiper'

const deviceWidth = Dimensions.get('window').width;      //设备的宽度
type Props = {};
const data = Array.from(new Array(8)).map((_val, i) => ({
  icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
  text: `Name${i}`,
}))
class Home extends Component<Props> {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      show: false,
      data: [
        {
          id: ''
          image: ''
        }
      ]
    }
  }
  onChange = (value) => {
   this.setState({ value })
   if(value !== '') {
     this.setState({ show: true })
   }
 }
 onDelete = () => {
   this.setState({ value: '', show: false })

 }
  render() {
    const { show } = this.state
    return (
        <ScrollView>
          <Image
            source={require('../../../public/image/home_bg.png')}
            style={[
              styles.absoluteFillObject,
              {
                width: deviceWidth,
                height: 1375
              }
            ]}
          />
          <View style={styles.homeWrap}>
            <View style={styles.homeTop}>
              <View style={styles.homeNav}>
                <View style={styles.sysStyle} onPress={Actions.sys}>
                  <Image
                    source={require('../../../public/image/sys.png')}
                    style={{ width: 16, height: 16, alignSelf: 'center'}}
                  />
                  <Text style={{ color: '#fff' }}>
                    扫一扫
                  </Text>
                </View>
                <View style={styles.searchView}>
                  <Image
                    source={require('../../../public/image/search.png')}
                    style={styles.searchIcon}
                  />
                  <TextInput
                    style={styles.searchBar}
                    onChange={this.onChange}
                    value={this.state.value}
                    placeholder="请输入文字内容"
                  />
                  {
                    show
                    ? <TouchableHighlight
                        onPress={this.onDelete}
                        style={styles.deleteIcon}
                      >
                        <Image
                          source={require('../../../public/image/delete.png')}
                        />
                      </TouchableHighlight>
                    : ''
                  }
                </View>
                <View style={styles.custom}>
                  <Image
                    source={require('../../../public/image/ai.png')}
                    style={{ width: 16, height: 16, alignSelf: 'center' }}
                  />
                  <Text style={{ color: '#fff' }}>
                    AI客服
                  </Text>
                </View>
              </View>
              <View style={styles.weather}>
                <Text style={{color: '#fff'}}>
                  8 ~ 17°
                  <Image source={require('../../../public/image/sun.png')}
                  style={{ width: 16, height: 16 }}/>
                   晴 空气良好
                </Text>
              </View>
              <View style={{marginBottom: 5}}>
                <Swiper
                    height={138}
                    horizontal={true}
                    paginationStyle={{bottom: 0}}
                    showsButtons={false}
                    loop={true}
                    autoplay={true}
                    dot={<View style={{           //未选中的圆点样式
                      backgroundColor: 'rgba(166,166,167,.8)',
                      width: 3,
                      height: 3,
                      borderRadius: 1,
                      marginLeft: 10,
                      marginRight: 5,
                      marginTop: 9,
                      marginBottom: 9
                    }}/>}
                    activeDot={<View style={{    //选中的圆点样式
                      backgroundColor: '#555557',
                      width: 11,
                      height: 3,
                      borderRadius: 1.5,
                      marginLeft: 10,
                      marginRight: 9,
                      marginTop: 9,
                      marginBottom: 9,
                  }}/>}
                >
                    <Image source={require('../../../public/image/banner.png')}
                      style={{width: deviceWidth-22, height:138, borderRadius: 2}}
                    />
                    <Image source={require('../../../public/image/banner1.png')}
                      style={{width: deviceWidth-22, height:138, borderRadius: 2}}
                    />
                </Swiper>
              </View>
            </View>
            <View style={styles.homeBottom}>
              <View style={styles.titleNav}>
                <View style={{alignItems: 'center'}}>
                  <Image source={require('../../../public/image/title.png')}
                    style={{width: 30, height: 30, marginBottom: 14}}
                  />
                  <Text style={{color: '#6c6c6c'}}>
                    办事大厅
                  </Text>
                </View>
                <View style={{alignItems: 'center'}}>
                  <Image source={require('../../../public/image/title1.png')}
                    style={{width: 30, height: 30, marginBottom: 14}}
                  />
                  <Text style={{color: '#6c6c6c'}}>
                    生活缴费
                  </Text>
                </View>
                <View style={{alignItems: 'center'}}>
                  <Image source={require('../../../public/image/title2.png')}
                    style={{width: 30, height: 30, marginBottom: 14}}
                  />
                  <Text style={{color: '#6c6c6c'}}>
                    诊疗挂号
                  </Text>
                </View>
                <View style={{alignItems: 'center'}}>
                  <Image source={require('../../../public/image/title3.png')}
                    style={{width: 30, height: 30, marginBottom: 14}}
                  />
                  <Text style={{color: '#6c6c6c'}}>
                    咨询投诉
                  </Text>
                </View>
              </View>
              <View style={styles.newsWrap}>
                <View style={{alignSelf: 'center',borderRightWidth: 1, borderColor: '#7b81fd'}}>
                  <Text style={{fontSize: 13, color: '#7b81fd', width: 38, paddingRight: 8, textAlign: 'center', alignSelf: 'center'}}>
                    最新资讯
                  </Text>
                </View>
                <View style={styles.newsContent}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{borderColor: '#7b81fd',borderWidth: 1, borderRadius: 5, color: '#7b81fd', textAlign: 'center', padding: 2, marginBottom: 8}}>
                      最新
                    </Text>
                    <Text style={{marginLeft: 8, alignSelf: 'center'}}>
                      常勃在我市调研爱国主义教育...
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{borderColor: '#7b81fd',borderWidth: 1, borderRadius: 5, color: '#7b81fd', textAlign: 'center', padding: 2}}>
                      最新
                    </Text>
                    <Text style={{marginLeft: 8, alignSelf: 'center'}}>
                      常勃在我市调研爱国主义教育...
                    </Text>
                  </View>
                  <Image
                    style={styles.imageArrow}
                    source={require('../../../public/image/arrowr.png')}
                  />
                </View>
              </View>
              <View style={styles.navBar}>
                <View style={styles.navTitle}>
                  <View style={styles.h3}>
                    <Text>
                      政务服务
                    </Text>
                  </View>
                  <TouchableHighlight>
                    <Text style={{color: '#939393'}}>
                      更多
                    </Text>
                  </TouchableHighlight>
                </View>
                <View style={[{ padding: 10 }]}>

               </View>
              </View>
            </View>
          </View>
        </ScrollView>
    );
  }
}
export default Home
const styles = StyleSheet.create({
  absoluteFillObject: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  homeWrap: {
    flex: 1,
    paddingTop: 22,
  },
  homeTop: {
    paddingLeft: 11,
    paddingRight: 11
  },
  homeNav: {
    paddingTop: 3,
    flexDirection:'row',
    justifyContent: 'space-between',
    marginBottom: 18,
    alignItems: 'center'
  },
  searchView: {
    flex: 1,
    marginRight: 8,
    marginLeft: 8,
    position: 'relative'
  },
  searchIcon: {
    position: 'absolute',
    top: 6,
    left: 9,
    zIndex: 99
  },
  deleteIcon: {
    position: 'absolute',
    top: 6,
    right: 9,
    zIndex: 99
  },
  searchBar: {
    borderRadius: 13,
    height: 27,
    backgroundColor:'rgb(170,180,253)',
    paddingLeft: 47
  },
  weather: {
    alignSelf:'flex-end',
    paddingRight: 17,
    paddingBottom: 4
  },
  titleNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingTop: 39,
    paddingBottom: 29
  },
  newsWrap: {
    marginTop: 9,
    marginBottom: 9,
    backgroundColor: '#fff',
    paddingLeft: 15,
    paddingTop: 16,
    paddingBottom: 16,
    flexDirection: 'row'
  },
  newsContent: {
    paddingLeft: 21,
    flex: 1,
    flexDirection: 'column',
    position: 'relative'
  },
  imageArrow: {
    position: 'absolute',
    right: 12,
    top: 16,
    width: 10,
    height: 12
  },
  // 政务服务
  navBar: {
    marginBottom: 9,
    backgroundColor: '#fff',
    paddingTop: 13,
    paddingLeft: 9,
    paddingRight: 9
  },
  navTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#dfdede',
    paddingLeft: 6,
    paddingRight: 6,
    paddingBottom: 10,
    alignItems: 'center'
  },
  h3: {
    borderLeftWidth: 2,
    borderColor: '#7b81fd',
    fontSize: 14,
    paddingLeft: 5
  }
})
